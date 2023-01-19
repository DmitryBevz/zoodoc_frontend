import { useSelector } from "react-redux";
import { Dialog, DialogContent, DialogTitle, Typography, Button, DialogActions } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { selectModalState, selectOpenModalState } from "../../redux/slices/modal";
import { ModalType } from "../../redux/types/modal";

import { useStyles } from "./style";

interface ModalHeaderProps {
  title: string;
  onCancel?: (params: any) => void;
}

interface ModalFooterProps {
  onSubmit?: (params: any) => void;
  onCancel?: (params: any) => void;
  onClickFollow?: (params: any) => void;
}

const ModalHeader = ({ title, onCancel }: ModalHeaderProps) => {
  const styles = useStyles();
  return (
    <DialogTitle className={styles.dialogTitle}>
      <Typography>{title}</Typography>
      <IconButton className={styles.iconButton} onClick={onCancel}>
        <CloseIcon sx={{ fontSize: 20 }} color="inherit" />
      </IconButton>
    </DialogTitle>
  );
};

const ModalFooter = ({ onSubmit, onCancel }: ModalFooterProps) => (
  <DialogActions>
    <Button variant="contained" onClick={onSubmit}>
      <Typography component="span" color="secondary">
        Так
      </Typography>
    </Button>
    <Button variant="outlined" onClick={onCancel}>
      <Typography component="span">Ні</Typography>
    </Button>
  </DialogActions>
);

export const Modal = () => {
  const modalActiveType = useSelector(selectOpenModalState);
  const modalProps = useSelector(selectModalState(modalActiveType));
  const styles = useStyles();

  if (!modalActiveType) {
    return null;
  }

  const modalsByType: { [keys in ModalType]: JSX.Element } = {
    [ModalType.Error]: (
      <>
        <ModalHeader title="Виправте ці помилки" onCancel={modalProps?.onCancel} />
        <DialogContent dividers>
          {modalProps?.payload?.errors?.map((er: any, index: number) => (
            // eslint-disable-next-line react/no-array-index-key
            <Typography key={index}>{er.msg}</Typography>
          ))}
        </DialogContent>
      </>
    ),

    [ModalType.Logout]: (
      <>
        <ModalHeader title="Logout" onCancel={modalProps?.onCancel} />
        <DialogContent dividers>
          <Typography>Ви дійсно хочете вийти?</Typography>
        </DialogContent>
        <ModalFooter onCancel={modalProps?.onCancel} onSubmit={modalProps?.onSubmit} />
      </>
    ),

    [ModalType.UpdateUserData]: (
      <>
        <ModalHeader title="Редагувати профіль" onCancel={modalProps?.onCancel} />
        <DialogContent dividers>
          <Typography>Ви дійсно хочете змінити інформацію?</Typography>
        </DialogContent>
        <ModalFooter onCancel={modalProps?.onCancel} onSubmit={modalProps?.onSubmit} />
      </>
    ),

    [ModalType.DeleteUser]: (
      <>
        <ModalHeader title="Видалити профіль" onCancel={modalProps?.onCancel} />
        <DialogContent dividers>
          <Typography>
            Ви дійсно хочете видалити свій профіль? Після видалення інформація щезне та не підлягатиме відневленню
          </Typography>
        </DialogContent>
        <ModalFooter onCancel={modalProps?.onCancel} onSubmit={modalProps?.onSubmit} />
      </>
    ),
  };

  return (
    <Dialog open={modalProps?.isOpen ?? false} onClose={modalProps?.onCancel}>
      {modalActiveType && modalsByType[modalActiveType]}
    </Dialog>
  );
};
