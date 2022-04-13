import { createStyles, Dialog, DialogContent, DialogTitle, IconButton, Theme, WithStyles, withStyles } from '@material-ui/core';
import { useRouter } from 'next/router';
import CloseIcon from '@material-ui/icons/Close';

const styles = (theme: Theme) =>
  createStyles({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
    body: {
      padding: theme.spacing(2),
    }
  });

export interface SimpleDialogProps extends WithStyles<typeof styles> {
  open: boolean;
}

const ConfirmDialog = withStyles(styles)((props: SimpleDialogProps) => {
  const router = useRouter();

  return (
    <Dialog
      aria-labelledby='simple-dialog-title'
      open={props.open}
      onClose={() => router.push('/')}
    >
      <DialogTitle id='simple-dialog-title' className={props.classes.root}>
        Booking Sent!
        <IconButton aria-label='close' onClick={() => router.push('/')} className={props.classes.closeButton}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers className={props.classes.body}>The booking has the sent! Someone will contact you soon!</DialogContent>
    </Dialog>
  );
});

export default ConfirmDialog;
