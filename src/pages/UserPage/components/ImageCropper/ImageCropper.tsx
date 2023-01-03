import React, { useCallback } from 'react';
import Cropper from "react-easy-crop";

import { DialogActions, DialogContent, Slider } from "@mui/material";
import Button from "@mui/material/Button";
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import Box from "@mui/material/Box";
import getCroppedImg from "./canvasUtils";
import { useDispatch } from "react-redux";
import { useStyles } from "./styles";
import { toast } from 'react-toastify';
import {useToast} from "../../../../hooks/useToast";


interface CroppedArea {
  height: number;
  width: number;
  x: number;
  y: number;
}

interface PrevState {
  avatarUrl: string;
  wallpaperUrl: string;
}

const ImageCropper = ({handleClose, setFormState, onSubmit}: any) => {
  const [image, setImage] = React.useState("");
  const [zoom, setZoom] = React.useState<number>(1);
  const inputWallpaperRef = React.useRef<HTMLInputElement>(null);
  const [croppedArea, setCroppedArea] = React.useState<Object>({});
  const [crop, setCrop] = React.useState({ x: 0, y: 0 });
  const dispatch = useDispatch<any>();
  const styles = useStyles()
  const notify = useToast();

  // const handleFileUpload = async (croppedImage: unknown) => {
  //   try {
  //     const params = {
  //       file: croppedImage,
  //     };
  //     const { payload } = await dispatch(saveDocument(params));
  //     setFormState((prevState: PrevState)=>{
  //       return {...prevState, wallpaperUrl: payload }
  //     });
  //   } catch (error) {
  //     console.error(error);
  //     notify("Проблема з завантаженням файлу");
  //   }
  // };

  const onSelectFile = (event: React.ChangeEvent<any>) => {
    if (event.target.files && event.target.files.length > 0) {
      const render: any = new FileReader();
      render.readAsDataURL(event.target.files[0]);
      render.addEventListener("load", () => {
        setImage(render.result);
      });
    }
  };

  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(image,croppedArea ?? null)
      // await handleFileUpload(croppedImage);
      setImage("");
      onSubmit();
    } catch (e) {
      console.error(e)
    }
  }, [image, croppedArea])

  const onCropComplete = (croppedAreaPercentage: CroppedArea, croppedAreaPixels: CroppedArea) => {
    setCroppedArea(croppedAreaPixels);
  };
  const triggerFileSelectPopup = () =>  {
    const btn = inputWallpaperRef.current as HTMLElement;
    btn.click();
  }

  return (
    <>
      <DialogContent>
        <Box className={styles.dialog}>
          { image ?
            <>
              <Slider
              min={ 1 }
              max={ 3 }
              step={ 0.1 }
              value={ zoom }
              onChange={ (e, zoom: number | number[]) => setZoom(zoom as number) }
              />
              <div className={ styles.cropContainer }>
                <Cropper
                image={ image }
                crop={ crop }
                zoom={ zoom }
                aspect={ 3 }
                onCropChange={ setCrop }
                onZoomChange={ setZoom }
                onCropComplete={ onCropComplete }
                />
              </div>
            </> : <InsertPhotoOutlinedIcon className={styles.uploadImage} onClick={triggerFileSelectPopup}/>
          }
        </Box>

      </DialogContent>
      <DialogActions style={{
        display: 'flex',
        justifyContent: "space-around"
      }}>
        <Button style={{width: "100%"}} onClick={handleClose}>Відміна</Button>
        <Button style={{width: "100%"}} onClick={triggerFileSelectPopup}>Вибрати фото</Button>
        <Button style={{width: "100%"}} onClick={showCroppedImage}>Зберегти</Button>
      </DialogActions>

      <input
        ref={inputWallpaperRef}
        type="file"
        accept="image/*"
        onChange={onSelectFile}
        name="wallpaperUrl"
        hidden
      />
    </>
  );
};

export default ImageCropper;
