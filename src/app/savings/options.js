import React, { useState } from 'react';
import { ActionButton, DialogContainer, Heading, Divider, Content, Form, TextField, ButtonGroup, Button, Dialog, MenuTrigger, Menu, Item, Text, ComboBox, NumberField } from '@adobe/react-spectrum';
import More from '@spectrum-icons/workflow/More';
import { useDialogContainer } from '@adobe/react-spectrum';

export function Options({ category, categories }) {
  const [dialog, setDialog] = useState(null);

  const selectedCategoryName = category.category_name;
  const selectedCategoryAmount = category.savings;
  const selectedCategoryId = category.categoryId;
  console.log(category, "category");

  return (
    <>
      <MenuTrigger>
        <ActionButton aria-label="Actions">
          <More aria-label="more" />
        </ActionButton>
        <Menu onAction={setDialog}>
          <Item key="edit">Edit</Item>
          <Item key="transfer">Transfer</Item>
        </Menu>
      </MenuTrigger>
      <DialogContainer onDismiss={() => setDialog(null)}>
        {dialog === 'edit' && <EditDialog selectedCategoryName={selectedCategoryName} categoryAmount={categoryAmount} />}
        {dialog === 'transfer' && (
          <TransferDialog selectedCategoryName={selectedCategoryName} selectedCategoryAmount={selectedCategoryAmount} selectedCategoryId={selectedCategoryId} categories={categories} />
        )}
      </DialogContainer>
    </>
  );
}

function EditDialog({ selectedCategoryName, selectedCategoryAmount, }) {
  const dialog = useDialogContainer();

  return (
    <Dialog height="static-size-4600">
      <Heading>Edit - {categoryName}</Heading>
      <Divider />
      <Content>
        <Form labelPosition="side" width="100%" height="size-600">
          <Text>Current Amount: {categoryAmount}</Text>
          <TextField label="Description" />
          <TextField autoFocus label="Amount" />
        </Form>
      </Content>
      <ButtonGroup>
        <Button variant="secondary" onPress={dialog.dismiss}>Cancel</Button>
        <Button variant="accent" onPress={dialog.dismiss}>Save</Button>
      </ButtonGroup>
    </Dialog>
  );
}

function TransferDialog({ selectedCategoryName, selectedCategoryAmount, selectedCategoryId, categories }) {
  const dialog = useDialogContainer();
  // console.log(categories, "categories"); 
  const [destinationCategoryId, setDestinationCategoryId] = useState(null);
  const [amountToTransfer, setAmountToTransfer] = useState(0);
  const [description, setDescription] = useState("");

  const destinationCategoryInformation = categories.find(category => category.categoryId === destinationCategoryId);

  const actualMoneyOnReceivingCategory = destinationCategoryInformation ? destinationCategoryInformation.category_budget : 0;

  const newAmountReceivingCategory = parseFloat(actualMoneyOnReceivingCategory) + parseFloat(amountToTransfer);

  const ReminderAmount = parseFloat(selectedCategoryAmount) - parseFloat(amountToTransfer);

  const sendInformation = console.log("Sending information to the server", {
  newAmountReceivingCategory, description, destinationCategoryId, selectedCategoryId, ReminderAmount}
  )


  return (
    <Dialog height="calc(size-6000 - size-700)">
      <Heading>Transfer from: {selectedCategoryName}</Heading>
      <Divider />
      <Content>
        <Form labelPosition="side" width="100%">
          <Text>Current Amount: {selectedCategoryAmount}</Text>
          <ComboBox
            label="Category Destination"
            defaultItems={categories}
            selectedKey={destinationCategoryId}
            onSelectionChange={selected => setDestinationCategoryId(selected)}
            isRequired
          >
            {item => <Item key={item.categoryId}>{item.category_name}</Item>}
          </ComboBox>
          <NumberField label="Amount" value={amountToTransfer} minValue={0} maxValue={selectedCategoryAmount} onChange={setAmountToTransfer} isRequired/>
          <TextField autoFocus label="Description" value={description} onChange={setDescription} isRequired/>
        </Form>
      </Content>
      <ButtonGroup>
        <Button variant="secondary" onPress={dialog.dismiss}>Cancel</Button>
        <Button type='submit' variant="accent" onPress={dialog.dismiss}>Save</Button>
      </ButtonGroup>
    </Dialog>
  );
}