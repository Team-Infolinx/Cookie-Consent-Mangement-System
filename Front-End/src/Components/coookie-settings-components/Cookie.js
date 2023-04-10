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
                <TableCell>Cookie Name</TableCell>
                <TableCell>Domain</TableCell>
                <TableCell>Path</TableCell>
                <TableCell>Expire Date</TableCell>
                <TableCell>Category</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>{props.cookie.cookieName}</TableCell>
                <TableCell>{props.cookie.domain}</TableCell>
                <TableCell>{props.cookie.path}</TableCell>
                <TableCell>{props.cookie.expireDate}</TableCell>
                <TableCell>
                  <TextField
                    select
                    label="Category"
                    helperText="Select a category"
                    fullWidth
                    size="small"
                    defaultValue=""
                    value={props.cookie.category}
                    onChange={(event) =>
                      props.handleCatergorization(event, props.cookie.id)
                    }
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
