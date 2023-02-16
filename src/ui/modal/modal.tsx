import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Button } from '../button';

type modal = {
  isOpen: boolean;
  title?: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: any;
  actions?: boolean;
  onSubmitHandler?: () => void;
};

export const Modal = ({ isOpen, title, setIsOpen, children, actions, onSubmitHandler }: modal) => {
  const onCloseModalHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Dialog onClose={onCloseModalHandler} open={isOpen}>
        <DialogTitle>{title}</DialogTitle>

        <DialogContent>{children}</DialogContent>
        {actions ? (
          <DialogActions>
            <Button onClick={() => setIsOpen(!isOpen)} color='secondary' text='CANCEL' />
            <Button onClick={onSubmitHandler} color='primary' text='SAVE' />
          </DialogActions>
        ) : null}
      </Dialog>
    </div>
  );
};
