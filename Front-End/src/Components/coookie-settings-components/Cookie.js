import {
  Card,
  CardContent,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import React from "react";

function Cookie(props) {
  return (
    <Card sx={{ mt: 2 }}>
      <CardContent>
        <TableContainer componet={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Domain</TableCell>
                <TableCell>Duration</TableCell>
                <TableCell>Category</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>{props.cookie.id}</TableCell>
                <TableCell>{props.cookie.type}</TableCell>
                <TableCell>{props.cookie.domain}</TableCell>
                <TableCell>{props.cookie.duration}</TableCell>
                <TableCell>
                  <TextField
                    select
                    label="Category"
                    helperText="Select a category"
                    fullWidth
                    size="small"
                    defaultValue=""
                  >
                    {props.cookieCategories.map((category) => (
                      <MenuItem key={category} value={category}>
                        {category}
                      </MenuItem>
                    ))}
                  </TextField>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
}

export default Cookie;
