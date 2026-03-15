"use client";

import { TextField, Select, MenuItem, Button } from "@mui/material";
import DateReserve from "@/components/DateReserve";

export default function BookingPage() {
  return (
    <main className="p-10">
      <form className="flex flex-col gap-4">
        <TextField
          name="Name-Lastname"
          label="Name-Lastname"
          variant="standard"
        />

        <TextField
          name="Contact-Number"
          label="Contact-Number"
          variant="standard"
        />

        <Select id="venue" defaultValue="Bloom">
          <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>

          <MenuItem value="Spark">Spark Space</MenuItem>

          <MenuItem value="GrandTable">The Grand Table</MenuItem>
        </Select>

        <DateReserve />

        <Button name="Book Venue">Book Venue</Button>
      </form>
    </main>
  );
}