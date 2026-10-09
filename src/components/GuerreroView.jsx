import { Card, CardHeader, CardContent, TableCell, TableBody, Table, TableHead, TableRow, Button, Typography, Chip } from '@mui/material'
import React from 'react'

function GuerreroTable({ guerreros = [], onEliminar }) {
  const campos = [
    "Nombre del Guerrero",
    "Tipo de Guerrero",
    "Categoría / Rango",
    "Nivel",
    "Clasificación",
    "Acción"
  ]

  return (
    <Card elevation={3}>
      <CardHeader title="Despliegue del Ejército (Tropas de Mordor)" />
      <CardContent>
        {guerreros.length === 0 ? (
          <Typography variant="body2" color="text.secondary" align="center">
            No hay tropas registradas en el ejército.
          </Typography>
        ) : (
          <Table>
            <TableHead>
              <TableRow>
                {campos.map((columna) => (
                  <TableCell key={columna}>
                    <strong>{columna}</strong>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {guerreros.map((g, index) => (
                <TableRow key={g.id ?? index}>
                  <TableCell>{g.nombre}</TableCell>
                  <TableCell>{g.tipo}</TableCell>
                  <TableCell>{g.categoria}</TableCell>
                  <TableCell>{g.nivelCombate}</TableCell>
                  <TableCell>
                    <Chip
                      label={g.tipo}
                      color={g.tipo == "uruk" ? "error" : "success"}
                      size="small"
                    />
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      color="error"
                      size="small"
                      onClick={() => onEliminar && onEliminar(g.id ?? index)}
                    >
                      Asesinado por la aparición
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </CardContent>
    </Card>
  )
}

export default GuerreroTable