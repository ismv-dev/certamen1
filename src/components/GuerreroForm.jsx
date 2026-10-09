import { Button, Card, CardContent, CardHeader, FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Rating, Select, Slider, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'

function GuerreroForm({ onCreateGuerrero = () => {} }) {
  const tipos = [
    { value: "orco", label: "Orco" }, 
    { value: "uruk", label: "Uruk" }
  ];
  
  const categorias = [
    { value: "capitan", label: "Capitán" }, 
    { value: "berserker", label: "Berserker" }, 
    { value: "explorador", label: "Explorador" }, 
    { value: "asediador", label: "Asediador" }
  ];

  const [nombre, setNombre] = useState("");
  const [tipo, setTipo] = useState(tipos[0].value);
  const [nivelCombate, setNivelCombate] = useState(1);
  const [categoria, setCategoria] = useState("");
  const [nivelAmenaza, setNivelAmenaza] = useState(1);

  const handleCreateGuerrero = () => {
    onCreateGuerrero({ 
      nombre, 
      tipo, 
      nivelCombate, 
      categoria, 
      nivelAmenaza 
    });
    setNombre("");
    setTipo(tipos[0].value);
    setNivelCombate(1);
    setCategoria("");
    setNivelAmenaza("");
  };

  return (
    <Card raised>
      <CardHeader title="Formulario de guerrero" />
      <CardContent>
        <div className="mt-2">
          <TextField 
            label="Nombre del guerrero" 
            value={nombre} 
            onChange={(e) => setNombre(e.target.value)} 
            id="nombre-guerrero" 
            fullWidth 
          />
        </div>

        <div className="mt-2">
          <FormControl>
            <FormLabel id="tipo-label">Tipo de guerrero</FormLabel>
            <RadioGroup 
              row 
              aria-labelledby="tipo-label" 
              name="row-radio-buttons-group"
              value={tipo}
              onChange={(e) => setTipo(e.target.value)}
            >
              {tipos.map((t) => (
                <FormControlLabel 
                  key={t.value} 
                  value={t.value} 
                  control={<Radio />} 
                  label={t.label} 
                />
              ))}
            </RadioGroup>
          </FormControl>
        </div>

        <div className="mt-2">
          <Typography gutterBottom>Nivel de Combate: {nivelCombate}</Typography>
          <Slider
            value={nivelCombate}
            onChange={(e, val) => setNivelCombate(val)}
            valueLabelDisplay="auto"
            min={1}
            max={100}
          />
        </div>

        <div className="mt-2">
          <FormControl fullWidth>
            <InputLabel id="select-categoria-label">Categoría</InputLabel>
            <Select 
              labelId="select-categoria-label"
              id="select-categoria" 
              value={categoria} 
              label="Categoría" 
              onChange={(e) => setCategoria(e.target.value)}
            >
              {categorias.map((c) => (
                <MenuItem key={c.value} value={c.value}>
                  {c.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div className="mt-2">
          <Typography>Nivel de amenaza</Typography>
          <Rating 
            id="nivel-amenaza" 
            value={nivelAmenaza} 
            onChange={(e, newValue) => setNivelAmenaza(newValue || 1)} 
            precision={1} 
          />
        </div>

        <div className="mt-2">
          <Button 
            variant="contained" 
            onClick={handleCreateGuerrero}
          >
            Agregar guerrero
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default GuerreroForm