import React from "react";
import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableBody,
  IconButton,
  Button,
} from "@mui/material";
import { Box } from "@mui/system";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function Websites(props) {
  return (
    <Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650, overflow: "hidden" }}>
          <TableHead>
            <TableRow sx={{ bgcolor: "#00A5FF" }}>
              <TableCell align="left" sx={{ color: "white" }}>
                Configuration Name
              </TableCell>
              <TableCell align="left" sx={{ color: "white" }}>
                Website
              </TableCell>
              <TableCell align="center" sx={{ color: "white" }}>
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.websites.map((website) => (
              <TableRow
                key={website.websiteId}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="left">{website.configName}</TableCell>
                <TableCell align="left">{website.domain}</TableCell>
                <TableCell align="center">
                  <IconButton size="small">
                    <EditIcon />
                  </IconButton>

                  <IconButton
                    size="small"
                    onClick={() => props.handleDeleteWebsite(website)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default Websites;
