import { Snackbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Alert } from '@material-ui/lab';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  alertRoot: { borderRadius: theme.spacing(0) },
}));

const ConsecutiveSnackbars = () => {
  const classes = useStyles();
  const queue = useSelector((state) => state.snackbar);

  const queueRef = useRef([]);
  const [open, setOpen] = React.useState(false);

  const [messageInfo, setMessageInfo] = useState({ severity: '', message: '' });

  const processQueue = () => {
    if (queueRef.current.length > 0) {
      setMessageInfo(queueRef.current.shift());
      setOpen(true);
    }
  };

  const handleTrigger = ({ severity, message }) => () => {
    queueRef.current.push({
      severity,
      message,
      key: new Date().getTime(),
    });

    if (open) {
      // immediately begin dismissing current message
      // to start showing new one
      setOpen(false);
    } else {
      processQueue();
    }
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const handleExited = () => {
    processQueue();
  };

  // Call handle trigger everytime redux state queue changes
  useEffect(() => handleTrigger(queue), [queue]);

  return (
    <Snackbar
      key={messageInfo ? messageInfo.key : undefined}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      onExited={handleExited}
      message={messageInfo ? messageInfo.message : undefined}
    >
      <Alert
        classes={{ root: classes.alertRoot }}
        onClose={handleClose}
        variant="filled"
        severity={messageInfo.severity}
      >
        {messageInfo.message}
      </Alert>
    </Snackbar>
  );
};

// ConsecutiveSnackbars.getInitialProps = async (context) => {
//   const { isServer, store } = context;

//   if (isServer) {
//     const serverQueue = store.state.snackbar;
//     // await store.dispatch(snackbar.success('yo'));
//   }
//   return { serverQueue };
// };

export default ConsecutiveSnackbars;
