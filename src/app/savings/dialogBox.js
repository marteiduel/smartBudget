import React, { useState } from 'react';
import { ActionButton, Heading, Divider, Content, Form, TextField, ButtonGroup, Button, Dialog, DialogTrigger, Flex, Book, Header, Link, Footer, Checkbox } from '@adobe/react-spectrum';

function Options() {
  return (
    <>
      <DialogTrigger>
        <ActionButton>Register</ActionButton>
        {(close) => (
          <Dialog>
            <Heading>
              <Flex alignItems="center" gap="size-100">
                Aqui
              </Flex>
            </Heading>
            <Divider />
            <Content>
              <Form>
                <TextField label="First Name" autoFocus />
                <TextField 
                    label="Amount"
                    placeholder="Enter Amount"
                    pattern="[0-9]*\.?[0-9]+"
                    id="amount"
                    isRequired
                    />                <TextField label="Street Address" />
                <TextField label="City" />
              </Form>
            </Content>
            <Footer>
              <Checkbox>
                I want to receive updates for exclusive offers in my area.
              </Checkbox>
            </Footer>
            <ButtonGroup>
              <Button variant="secondary" onPress={close}>Cancel</Button>
              <Button variant="accent" onPress={close}>Register</Button>
            </ButtonGroup>
          </Dialog>
        )}
      </DialogTrigger>
    </>
  );
}

export { Options }; // Ensure the component is exported correctly