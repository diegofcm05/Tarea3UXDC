import React, { useState, useEffect } from 'react';
import { Typography, Box, TextField, Button, FormControlLabel, Checkbox } from '@mui/material';


//Declaracion de interfaz task, usada para tener un mejor control de las checkboxes
interface Task {
  id: number;//Se utiliza un id para manejar los objetos 'Task' en arreglos
  isCompleted: boolean;//Booleano que identifica si la tarea esta completada o no
  nomtarea: string;//Nombre de la tarea
}

function CLComp() {
  const [newTask, setNewTask] = useState('');//useState para aregar nuevas tareas
  const [tasks, setTasks] = useState<Task[]>([]);//useState para mantener el arreglo actual de tareas
  
  //Parte del useEffect que se usa para guardar las tareas que hay en la pagina actualmente en LocalStorage
  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks)); 
    }
  }, []);

  //Parte del useEffect que se usa para recargar las tareas previamente guardadas
  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks]);

  
  //Funcion para agregar una tarea
  const addTask = () => {
    if (newTask.trim()) { //Este if verifica si, cuando se quitan todos los espacios de izquierda/dercha, el contenido no es nulo o ""
      setTasks([...tasks, { id: tasks.length, nomtarea: newTask, isCompleted: false }]);
      setNewTask(''); 
    }
  };

  //Funcion para borrar todas las tareas actuales
  const DelTasks = () => {
    setTasks([]);  
    localStorage.setItem('tasks', JSON.stringify([]));  
  };

  //Funcion para borrar solo las tareas seleccionadas (completadas)
  const DelCompleted = () => {
    const remainingTasks: Task[] = [];
    let contador = 0;//Se utiliza un contador para no repetir id's a la hora de reubicar los tasks no completados al nuevo arreglo
  
    for (let i = 0; i < tasks.length; i++) {
      if (!tasks[i].isCompleted) {
        const newTask: Task = {
          ...tasks[i],
          id: contador, 
        };
        contador++;
        remainingTasks.push(newTask);
      }
    }
  
    localStorage.setItem('tasks', JSON.stringify(remainingTasks));
    setTasks(remainingTasks);
  };

  //Cambia el estado de una tarea (booleano) de si esta completada (true) o no (false)
  const CompleteATask = (id: number) => {
    setTasks(tasks.map((task) => 
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    ));
  };

  return (
    //Titulo
    <Box sx={{ padding: '80px' }}>
      <Typography variant="h4" gutterBottom sx={{ fontFamily: 'Cooper Hewitt, sans-serif', fontWeight: 600 }}>
        Your DCList
      </Typography>
      
      {/*TextField donde se escriben las nuevas tareas*/}
      <TextField
        label="Write a new Task..."
        variant="outlined"
        fullWidth
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        sx={{
          marginBottom: '20px',
          '& .MuiInputLabel-root': {
            color: 'gray',
          },
          '& .MuiInputLabel-root.Mui-focused': {
            color: 'white',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'white',
            },
            '&:hover fieldset': {
              borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'white',
            },
          },
          '& .MuiInputBase-input': {
            color: 'white',
          }
        }}
      />
      
      {/*Botones de Crear Tarea, Eliminar todas las tareas y Eliminar solo las tareas seleccionadas */}
      <Button 
        variant="outlined" 
        color="success" 
        onClick={addTask} 
        sx={{ marginBottom: '20px' }}
      >
        Create Task
      </Button>

      <Button 
        variant="outlined" 
        color="error" 
        onClick={DelTasks} 
        sx={{ marginBottom: '20px', marginLeft: '20px'}}
      >
        Delete All
      </Button>

      <Button 
        variant="outlined" 
        color="error" 
        onClick={DelCompleted} 
        sx={{ marginBottom: '20px', marginLeft: '20px'}}
      >
        Delete Completed
      </Button>
      
      {/*Checkboxes, que son establecidas en un FormControlLabel y son creadas a la hora de presionar el boton*/}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {tasks.map((task) => (
          <FormControlLabel key={task.id}
            control={
              <Checkbox checked={task.isCompleted}
                onChange={() => CompleteATask(task.id)}
                sx={{ color: 'red', '&.Mui-checked': { color: 'green', },}}
              />
            }
            label={task.nomtarea}
          />
        ))}
      </Box>
    </Box>
  );
}

export default CLComp;
