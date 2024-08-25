'use client';

import React, { ReactElement } from 'react';

interface ModalProps {
  onSubmit: () => void;
  onClose: () => void;
  actionLabel: string;
  title?: string;
  body?: ReactElement;
  footer?: ReactElement;
  isOpen?: boolean;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondarLabel?: string;
}

function Modal({}: ModalProps) {
  return <div>Modal</div>;
}

export default Modal;
