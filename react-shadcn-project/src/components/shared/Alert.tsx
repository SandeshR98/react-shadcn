import { toast } from 'sonner';

export const setAlertSuccess = (message: string): void => {
	toast.success(message, { position: 'bottom-left' });
};

export const setAlertError = (message: string): void => {
	toast.error(message, { position: 'bottom-left' });
};
