import {
  Backdrop,
  Box,
  Button,
  Fade,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import {
  useDeletePostMutation,
  useGetAllPostQuery,
  usePrefetch,
} from "../../redux/services/StudentPostApi";
import toast from "react-hot-toast";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};
const DeleteModal = ({ open, setOpen, selectedId }) => {
  const [deletePost, { isError }] = useDeletePostMutation();
  const { refetch } = useGetAllPostQuery();
  const handleDel = async () => {
    try {
      const res = await deletePost(selectedId);
      if (res?.data) {
        toast.success("Post deleted successfully");
        setOpen(false);
        refetch("All-Post");
      } else {
        toast.error(res?.error?.data?.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={() => setOpen(false)}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Typography variant="h6" mb="10px">
            Are you sure you want to delete this post?
          </Typography>
          <Stack
            flexDirection={"row"}
            alignItems={"center"}
            gap="10px"
            mt={"20px"}
          >
            <Button
              onClick={() => setOpen(false)}
              sx={{
                background: "#BE3525",
                "&:hover": { background: "#BE2525" },
              }}
              variant="contained"
            >
              No
            </Button>
            <Button
              onClick={handleDel}
              sx={{
                background: "#25BE4B",
                "&:hover": { background: "#25BE3B" },
              }}
              variant="contained"
            >
              Yes
            </Button>
          </Stack>
        </Box>
      </Fade>
    </Modal>
  );
};

export default DeleteModal;
