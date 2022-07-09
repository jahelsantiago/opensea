// Importing modules
import React, { useState } from "react";
import { ethers } from "ethers";
import { Button, Divider, Grid, Paper } from "@mui/material";

export default function Wallet() {
  // usetstate for storing and retrieving wallet details
  const [data, setdata] = useState({
    address: "",
    Balance: null,
  });

  // Button handler button for handling a
  // request event for metamask
  const btnhandler = () => {
    // Asking if metamask is already present or not
    if (window.ethereum) {
      // res[0] for fetching a first wallet
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((res) => accountChangeHandler(res[0]));
    } else {
      alert("install metamask extension!!");
    }
  };

  // getbalance function for getting a balance in
  // a right format with help of ethers
  const getbalance = (address) => {
    // Requesting balance method
    window.ethereum
      .request({
        method: "eth_getBalance",
        params: [address, "latest"],
      })
      .then((balance) => {
        // Setting balance
        setdata(prev => ({
          ...prev,
          Balance: ethers.utils.formatEther(balance),
        }));
      });
  };

  // Function for getting handling all events
  const accountChangeHandler = (account) => {
    // Setting an address data
    setdata(prev => ({
      ...prev,
      address: account,
    }));

    // Setting a balance
    getbalance(account);
  };

  return (
    <Paper elevation={3} sx={{ maxWidth: "500px", p: 2 }} justifyContent="center">
      {/* Calling all values which we
	have stored in usestate */}

      <Grid justifyContent={"center"}>
        <Paper>
          <strong>Address: </strong>
          {data.address}
          <Divider />
          <strong>Balance: </strong>
          {data.Balance}
        </Paper>
          <Button onClick={btnhandler} variant="contained"  sx={{marginY:"1rem"}}>
            Connect to wallet
          </Button>
      </Grid>
    </Paper>
  );
}
