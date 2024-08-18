"use client";
import { useState } from "react";
import { deleteCategory, editCategory } from "@/app/lib/categories";
import { DialogTrigger, ActionButton, Dialog, Header, Divider, Content, Form, TextField, Button, ButtonGroup, Heading, Text, Flex } from "@adobe/react-spectrum";

function EditCategoryPopUp({ data, onClose }) {
  const categoryId = data.categoryId;
  const [categoryName, setCategoryName] = useState(data.category_name);
  const [categoryBudget, setCategoryBudget] = useState(data.category_budget);

  const deleteHandler = async () => {
    await deleteCategory(categoryId);
    window.location.reload();
  };

  const editHandler = async (e) => {
    e.preventDefault();
    await editCategory(categoryName, categoryBudget, categoryId);
    window.location.reload();
  };

  return (
    <DialogTrigger isOpen={true} onOpenChange={onClose}>
      {/* Invisible button to satisfy DialogTrigger requirements */}
      <ActionButton isHidden>Open</ActionButton>
      <Dialog>
        <Header><Button variant="secondary" onPress={onClose}>Cancel</Button></Header>
        <Divider />
        <Content>
          <Form onSubmit={editHandler}>
            <TextField
              label="Category Name"
              value={categoryName}
              onChange={setCategoryName}
              required
            />
            <TextField
              label="Category Budget"
              value={categoryBudget}
              onChange={setCategoryBudget}
              marginTop={10}
              marginBottom={20}
              required
            />
            <ButtonGroup>
              <DialogTrigger>
                <Button variant="negative">Delete</Button>
                {(close) => (
                  <Dialog>
                    <Heading>Delete Category</Heading>
                    <Divider />
                    <Content>
                      <Text>
                        Are you sure you want to delete this category? This action cannot be undone.
                      </Text>
                    </Content>
                    <ButtonGroup>
                      <Button variant="secondary" onPress={close}>Cancel</Button>
                      <Button variant="negative" onPress={async () => { 
                        await deleteHandler(); 
                        close();
                      }} autoFocus>Confirm</Button>
                    </ButtonGroup>
                  </Dialog>
                )}
              </DialogTrigger>
              <Flex justifyContent="end" width="calc(100%)">
                <Button variant="cta" type="submit">Edit Category</Button>
                
              </Flex>
            </ButtonGroup>
          </Form>
        </Content>
      </Dialog>
    </DialogTrigger>
  );
}

export default EditCategoryPopUp;
