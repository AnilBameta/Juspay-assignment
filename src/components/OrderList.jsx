import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Checkbox,
  Chip,
  Pagination,
  Stack,
  styled,
  Typography,
  Box,
  useTheme,
} from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import DateIcon from "../assets/svgs/dateIcon";
import AddIcon from "@mui/icons-material/Add";
import FilterListIcon from "@mui/icons-material/FilterList";
import UpDownArrow from "../assets/svgs/arrowupdown";
import SearchWhite from "../assets/images/Search-white.svg";
import SearchBlack from "../assets/images/Search-black.svg";

// Styled TableCell for header
const HeaderCell = styled(TableCell)(({ theme }) => ({
  fontSize: "0.75rem",
  borderBottom: `1px solid ${theme.palette.text.primary} 0.4`,
  opacity: "40%",
  paddingBottom: "5px",
}));

// Styled TableRow for body to remove borders
const BodyRow = styled(TableRow)({
  "& td": {
    // borderBottom: "none",
    paddingBottom: "5px",
  },
});

const BodyCell = styled(TableCell)(({ theme }) => ({
  fontSize: "0.75rem",
  borderBottom: `1px solid ${theme.palette.text.primary} 0.4`, // same as header
}));
// Dummy data
const orders = Array.from({ length: 45 }).map((_, i) => ({
  orderId: `#CM${9800 + i}`,
  user: {
    name: `User ${i + 1}`,
    avatar: `https://i.pravatar.cc/150?img=${i + 1}`,
  },
  project: `Project ${i + 1}`,
  address: `City ${i + 1}`,
  date:
    i % 3 === 0 ? "Just now" : i % 3 === 1 ? "1 hour ago" : "30 minutes ago",
  status: ["In Progress", "Complete", "Pending", "Approved", "Rejected"][i % 5],
}));

const getStatusColor = (status) => {
  switch (status) {
    case "Complete":
      return "#4AA785";
    case "Pending":
      return "#59A8D4";
    case "In Progress":
      return "#95A4FC";
    case "Approved":
      return "#FFC555";
    case "Rejected":
      return "#1C1C1C66";
    default:
      return "default";
  }
};

export default function OrdersList() {
  const theme = useTheme();
  const [page, setPage] = useState(1);
  const rowsPerPage = 10;
  const [selected, setSelected] = useState([]);

  const handleSelect = (orderId) => {
    setSelected((prev) =>
      prev.includes(orderId)
        ? prev.filter((id) => id !== orderId)
        : [...prev, orderId]
    );
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  // Calculate current rows
  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentRows = orders.slice(startIndex, endIndex);

  return (
    <Box>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
        mt={2}
        padding={1}
        sx={{
          background: theme.palette.container.default,
          borderRadius: "8px",
        }}
      >
        <Box display={"flex"} gap={2}>
          <AddIcon />
          <FilterListIcon />
          <UpDownArrow />
        </Box>
        <img
          src={theme.palette.mode === "light" ? SearchWhite : SearchBlack}
          alt="search"
        />
      </Box>
      <Paper
        sx={{
          maxWidth: '100%',
          margin: "auto",
          p: 2,
          boxShadow: "none",
          background: "none",
        }}
      >
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <HeaderCell padding="checkbox">
                  <Checkbox
                    indeterminate={
                      selected.length > 0 && selected.length < orders.length
                    }
                    checked={selected.length === orders.length}
                    onChange={(e) =>
                      setSelected(
                        e.target.checked ? orders.map((o) => o.orderId) : []
                      )
                    }
                    sx={{
                      color: theme.palette.text.secondary, // unchecked color
                      "&.Mui-checked": {
                        color: theme.palette.primary.main, // checked color
                      },
                      "& .MuiSvgIcon-root": {
                        borderRadius: "6px", // 👈 custom border radius
                        fontSize: 20, // optional: adjust size
                      },
                      pb:0
                    }}
                  />
                </HeaderCell>
                <HeaderCell>Order ID</HeaderCell>
                <HeaderCell>User</HeaderCell>
                <HeaderCell>Project</HeaderCell>
                <HeaderCell>Address</HeaderCell>
                <HeaderCell>Date</HeaderCell>
                <HeaderCell>Status</HeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {currentRows.map((row) => (
                <BodyRow key={row.orderId} hover>
                  <BodyCell padding="checkbox">
                    <Checkbox
                      checked={selected.includes(row.orderId)}
                      onChange={() => handleSelect(row.orderId)}
                      sx={{
                        color: theme.palette.text.secondary, // unchecked color
                        "&.Mui-checked": {
                          color: theme.palette.primary.main, // checked color
                        },
                        "& .MuiSvgIcon-root": {
                          borderRadius: "6px", // 👈 custom border radius
                          fontSize: 20, // optional: adjust size
                        },
                        pb:0
                      }}
                    />
                  </BodyCell>
                  <BodyCell>{row.orderId}</BodyCell>
                  <BodyCell sx={{ display: "flex", alignItems: "center" }}>
                    <Avatar
                      alt={row.user.name}
                      src={row.user.avatar}
                      sx={{
                        width: 30,
                        height: 30,
                        mr: 1,
                        display: "inline-block",
                      }}
                    />
                    {row.user.name}
                  </BodyCell>
                  <BodyCell>{row.project}</BodyCell>
                  <BodyCell>{row.address}</BodyCell>
                  <BodyCell>
                    <Box
                      sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        gap: 1,
                      }}
                    >
                      <DateIcon />
                      <span>{row.date}</span>
                    </Box>
                  </BodyCell>
                  <BodyCell>
                    <Box
                      sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                        gap: 1,
                      }}
                    >
                      <CircleIcon
                        sx={{ fontSize: 8, color: getStatusColor(row.status) }}
                      />
                      <Typography
                        fontSize={"0.75rem"}
                        color={getStatusColor(row.status)}
                      >
                        {row.status}
                      </Typography>
                    </Box>
                  </BodyCell>
                </BodyRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Pagination */}
        <Stack spacing={2} mt={2} alignItems="flex-end">
          <Pagination
            count={Math.ceil(orders.length / rowsPerPage)}
            page={page}
            onChange={handlePageChange}
            color="primary"
          />
        </Stack>
      </Paper>
    </Box>
  );
}
