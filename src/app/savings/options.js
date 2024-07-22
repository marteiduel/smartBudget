import React from 'react';
import { ActionButton, DialogContainer, AlertDialog, Heading, Divider, Content, Form, TextField, ButtonGroup, Button, Dialog, MenuTrigger, Menu, Item, Text } from '@adobe/react-spectrum';
import More from '@spectrum-icons/workflow/More';
import { useDialogContainer } from '@adobe/react-spectrum';

export function Options({ category }) {
  const [dialog, setDialog] = React.useState(null);

  const categoryName = category.category_name;
  const categoryAmount = category.savings;

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
        {dialog === 'edit' && <EditDialog categoryName={categoryName} categoryAmount={categoryAmount} />}
        {dialog === 'transfer' && (
          <TransferDialog categoryName={categoryName} categoryAmount={categoryAmount} />
        )}
      </DialogContainer>
    </>
  );
}

function EditDialog({ categoryName, categoryAmount }) {
  const dialog = useDialogContainer();

  return (
    <Dialog height={'static-size-4600'}>
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

function TransferDialog({ categoryName, categoryAmount }) {
  const dialog = useDialogContainer();

  return (
    <Dialog height="calc(size-6000 - size-700)">
      <Heading>Transfer from: {categoryName}</Heading>
      <Divider />
      <Content>
        <Form labelPosition="side" width="100%">
          <Text>Current Amount: {categoryAmount}</Text>
          <TextField label="Category Destination" />
          <TextField autoFocus label="Amount" />
          <TextField autoFocus label="Description" />
        </Form>
      </Content>
      <ButtonGroup>
        <Button variant="secondary" onPress={dialog.dismiss}>Cancel</Button>
        <Button variant="accent" onPress={dialog.dismiss}>Save</Button>
      </ButtonGroup>
    </Dialog>
  );
  
}
