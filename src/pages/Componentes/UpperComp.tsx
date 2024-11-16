import React from 'react';
import Image from 'next/image';
import checklist from './images/checklist.png';
import { Typography, Box } from '@mui/material';

function UpperComp() {
  return (
    <Box
      display="flex"
      flexDirection={{ xs: 'column', md: 'row' }} 
      alignItems="center"
      justifyContent="space-between"
      sx={{ padding: '80px' }} 
      gap={2}
    >
      {/*Lado Izquierdo del Componente: Titulo y Descripcion de la Pagina*/}
      <Box flex={1}>
        <Typography variant="h2" 
          gutterBottom 
          sx={{ fontFamily: 'Cooper Hewitt, sans-serif', fontWeight: 600 }}>
          What is DCList?
        </Typography>
        <Typography variant="body1" sx={{ fontFamily: 'Cooper Hewitt, sans-serif', fontWeight: 600 }}>
          DCList is a digital tool designed to help users organize and track tasks or items by creating checklists. It allows users to break down complex projects into manageable steps, providing a simple and effective way to stay organized. With DCList, users can easily add, edit, and mark off items on their lists, ensuring they stay on top of their priorities and achieve their goals efficiently. Whether for personal, work, or collaborative purposes, DCList streamlines the process of task management, making it easier to stay focused and productive. Try it out down below!
        </Typography>
      </Box>

      {/*Lado derecho del componente: Imagen*/}
      <Box
        flex={1}
        display="flex" 
        justifyContent="center" 
        alignItems="center" 
      >
        <Image
          src={checklist}
          alt="Imagen"
          
          width={400} 
          height={400} 
        />
      </Box>
    </Box>
  );
}

export default UpperComp;
