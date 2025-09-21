import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  styled,
  Typography,
  Container,
  useTheme,
} from "@mui/material";

// Styled TableCell for header only
const HeaderCell = styled(TableCell)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.text.primary} 0.4`,
  opacity: '40%',
  paddingBottom: '10px'
}));

// Styled TableRow for body to remove borders
const BodyRow = styled(TableRow)({
  "& td": {
    borderBottom: "none", // remove underline/border for body cells
    paddingBottom: '5px'
  },
});

const rows = [
  {
    name: "ASOS Ridley High Waist",
    price: "$25.26",
    quantity: 21,
    amount: "$6518.18",
  },
  {
    name: "Marco Lightweight Shirt",
    price: "$45.30",
    quantity: 43,
    amount: "$4518.18",
  },
  {
    name: "Half Sleeve Shirt",
    price: "$83.22",
    quantity: 54,
    amount: "$8518.18",
  },
  {
    name: "Lightweight Jacket",
    price: "$76.12",
    quantity: 234,
    amount: "$5518.18",
  },
  { name: "Marco Shoes", price: "$98.10", quantity: 111, amount: "$1518.18" },
];

export default function TopSellingProducts() {
  const theme = useTheme();
  return (
    <Container
      sx={{
        padding: 2,
        borderRadius: 3,
        background: theme.palette.container.default,
      }}
    >
      <Typography fontWeight={"bold"}>Top Selling Products</Typography>
      <TableContainer sx={{ maxWidth: 800, margin: "auto" }}>
        <Table>
          <TableHead>
            <TableRow>
              <HeaderCell>Name</HeaderCell>
              <HeaderCell>Price</HeaderCell>
              <HeaderCell>Quantity</HeaderCell>
              <HeaderCell>Amount</HeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <BodyRow key={index} hover>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.price}</TableCell>
                <TableCell>{row.quantity}</TableCell>
                <TableCell>{row.amount}</TableCell>
              </BodyRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
