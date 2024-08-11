import React, { useState } from 'react';
import { ActionButton, DialogContainer, Heading, Divider, Content, Form, TextField, ButtonGroup, Button, Dialog, MenuTrigger, Menu, Item, Text, ComboBox, NumberField } from '@adobe/react-spectrum';
import More from '@spectrum-icons/workflow/More';
import { useDialogContainer } from '@adobe/react-spectrum';

export function Options({ category, categories, onActionComplete }) {
  const [dialog, setDialog] = useState(null);

  const selectedCategoryName = category.category_name;
  const selectedCategoryAmount = category.savings;
  const selectedCategoryId = category.categoryId;

  return (
    <>
      <MenuTrigger>
        <ActionButton aria-label="Actions">
          <More aria-label="more" />
        </ActionButton>
        <Menu onAction={setDialog}>
          <Item key="edit">Edit</Item>
          <Item key="transfer">Transfer</Item>
          <Item key="zero">Set to Zero</Item>
        </Menu>
      </MenuTrigger>
      <DialogContainer onDismiss={() => setDialog(null)}>
        {dialog === 'edit' && <EditDialog selectedCategoryName={selectedCategoryName} selectedCategoryAmount={selectedCategoryAmount} selectedCategoryId={selectedCategoryId} onActionComplete={onActionComplete} />}
        {dialog === 'transfer' && (
          <TransferDialog selectedCategoryName={selectedCategoryName} selectedCategoryAmount={selectedCategoryAmount} selectedCategoryId={selectedCategoryId} categories={categories} onActionComplete={onActionComplete} />
        )}
        {dialog === 'zero' && (
          <ZeroDialog selectedCategoryName={selectedCategoryName} selectedCategoryAmount={selectedCategoryAmount} selectedCategoryId={selectedCategoryId} categories={categories} onActionComplete={onActionComplete} />
        )}
      </DialogContainer>
    </>
  );
}

function EditDialog({ selectedCategoryName, selectedCategoryAmount, selectedCategoryId, onActionComplete }) {
  const dialog = useDialogContainer();
  const [newAmount, setNewAmount] = useState(null);
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});

  const handleSave = async () => {
    const newErrors = {};
    if (!newAmount) newErrors.newAmount = "Amount is required.";
    if (!description) newErrors.description = "Description is required.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        const newAmountFloat = parseFloat(newAmount);
        const response = await fetch("https://marteiduel.com/smartbudget/savings-edit.php", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            description: description,
            newAmount: newAmountFloat,
            selectedCategoryId: selectedCategoryId,
          }),
        });
        
        const result = await response.json();
        if (result.success) {
          console.log('Transfer successful:', result.message);
          onActionComplete();
        } else {
          console.error('Transfer failed:', result.message);
        }
      } catch (error) {
        console.error('Error during transfer:', error);
      }

      dialog.dismiss();
    }
    
  };

  return (
    <Dialog height="static-size-4600">
      <Heading>Edit - {selectedCategoryName}</Heading>
      <Divider />
      <Content>
        <Form labelPosition="side" width="100%" height="size-600">
          <Text>Current Amount: {selectedCategoryAmount}</Text>
          <NumberField
            label="Amount"
            value={newAmount}
            minValue={-1}
            onChange={(value) => {
              setNewAmount(value);
              if (errors.newAmount) setErrors({ ...errors, newAmount: null });
            }}
            isRequired
            validationState={errors.newAmount ? "invalid" : undefined}
            errorMessage={errors.newAmount}
          />
          <TextField
            label="Description"
            onChange={(value) => {
              setDescription(value);
              if (errors.description) setErrors({ ...errors, description: null });
            }}
            value={description}
            isRequired
            validationState={errors.description ? "invalid" : undefined}
            errorMessage={errors.description}
          />
        </Form>
      </Content>
      <ButtonGroup>
        <Button variant="secondary" onPress={dialog.dismiss}>Cancel</Button>
        <Button variant="accent" onPress={handleSave}>Save</Button>
      </ButtonGroup>
    </Dialog>
  );
}

function TransferDialog({ selectedCategoryName, selectedCategoryAmount, selectedCategoryId, categories, onActionComplete }) {
  const dialog = useDialogContainer();
  const [destinationCategoryId, setDestinationCategoryId] = useState(null);
  const [amountToTransfer, setAmountToTransfer] = useState(null);
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});

  const destinationCategoryInformation = categories.find(category => category.categoryId === destinationCategoryId);

  const actualMoneyOnReceivingCategory = destinationCategoryInformation ? destinationCategoryInformation.savings : 0;
  const newAmountReceivingCategory = parseFloat(actualMoneyOnReceivingCategory) + parseFloat(amountToTransfer);

  const ReminderAmount = parseFloat(selectedCategoryAmount) - parseFloat(amountToTransfer);

  const handleSave = async () => {
    const newErrors = {};
    if (!destinationCategoryId) newErrors.destinationCategoryId = "Destination category is required.";
    if (!amountToTransfer) newErrors.amountToTransfer = "Amount to transfer is required.";
    if (!description) newErrors.description = "Description is required.";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await fetch("https://marteiduel.com/smartbudget/savings-transfer.php", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            newAmountReceivingCategory: newAmountReceivingCategory,
            description: description,
            destinationCategoryId: destinationCategoryId,
            selectedCategoryId: selectedCategoryId,
            ReminderAmount: ReminderAmount,
          }),
        });
        
        const result = await response.json();
        if (result.success) {
          console.log('Transfer successful:', result.message);
          onActionComplete();
        } else {
          console.error('Transfer failed:', result.message);
        }
      } catch (error) {
        console.error('Error during transfer:', error);
      }

      dialog.dismiss();
    }
  };

  return (
    <Dialog height="calc(size-6000 - size-500)">
      <Heading>Transfer from: {selectedCategoryName}</Heading>
      <Divider />
      <Content>
        <Form labelPosition="side" width="100%">
          <Text>Amount on Selected Category: {selectedCategoryAmount}</Text>
          <br />
          <Text>Amount on Destination Category: {destinationCategoryInformation ? destinationCategoryInformation.savings : 0}</Text>
          <ComboBox
            label="Category Destination"
            defaultItems={categories}
            selectedKey={destinationCategoryId}
            onSelectionChange={selected => {
              setDestinationCategoryId(selected);
              if (errors.destinationCategoryId) setErrors({ ...errors, destinationCategoryId: null });
            }}
            isRequired
            validationState={errors.destinationCategoryId ? "invalid" : undefined}
            errorMessage={errors.destinationCategoryId}
          >
            {item => <Item key={item.categoryId}>{item.category_name}</Item>}
          </ComboBox>
          <NumberField
            label="Amount"
            value={amountToTransfer}
            minValue={-1}
            maxValue={selectedCategoryAmount}
            onChange={(value) => {
              setAmountToTransfer(value);
              if (errors.amountToTransfer) setErrors({ ...errors, amountToTransfer: null });
            }}
            isRequired
            validationState={errors.amountToTransfer ? "invalid" : undefined}
            errorMessage={errors.amountToTransfer}
          />
          <TextField
            autoFocus
            label="Description"
            value={description}
            onChange={(value) => {
              setDescription(value);
              if (errors.description) setErrors({ ...errors, description: null });
            }}
            isRequired
            validationState={errors.description ? "invalid" : undefined}
            errorMessage={errors.description}
          />
        </Form>
      </Content>
      <ButtonGroup>
        <Button variant="secondary" onPress={dialog.dismiss}>Cancel</Button>
        <Button variant="accent" onPress={handleSave}>Save</Button>
      </ButtonGroup>
    </Dialog>
  );
}


function ZeroDialog({ selectedCategoryName, selectedCategoryAmount, selectedCategoryId, onActionComplete }) {
  const dialog = useDialogContainer();
  const [description, setDescription] = useState("");

  const handleSave = async () => {

      try {
        const response = await fetch("https://marteiduel.com/smartbudget/savings-zero.php", {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            selectedCategoryId: selectedCategoryId,
          }),
        });
        
        const result = await response.json();
        if (result.success) {
          console.log('Transfer successful:', result.message);
          onActionComplete();
        } else {
          console.error('Transfer failed:', result.message);
        }
      } catch (error) { 
        console.error('Error during transfer:', error);
      }

      dialog.dismiss();
    
  };

  return (
    <Dialog height="calc(size-3600 + size-250)">
      <Heading>Edit - {selectedCategoryName}</Heading>
      <Divider />
      <Content>
        <Form labelPosition="side" width="100%">
          <Text>Current Amount: {selectedCategoryAmount}</Text>
          <TextField
            label="Description"
            onChange={(value) => {
              setDescription(value);
            }}
            value={description}
          />
        </Form>
      </Content>
      <ButtonGroup>
        <Button variant="secondary" onPress={dialog.dismiss}>Cancel</Button>
        <Button variant="negative" style="fill" onPress={handleSave}>Set to Zero</Button>
      </ButtonGroup>
    </Dialog>
  );
}