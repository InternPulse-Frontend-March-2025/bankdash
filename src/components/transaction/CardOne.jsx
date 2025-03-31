import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

export default function CardOne({ title = "My cards" }) {
  return (
    <Box sx={{ maxWidth: 320, minHeight: 220 }}>
      <Typography variant="h6" sx={{ minHeight: "24px" }}>
        {" "}
        {title}
      </Typography>
      <Card
        sx={{
          minWidth: 320,
          minHeight: 220,
          backgroundImage: "linear-gradient(to right, #4C49ED, #0A06FA)",
          color: "white",
          borderRadius: 4,
          padding: 2,
          position: "relative",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        }}
      >
        <CardContent>
          {/* Balance Section */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 2,
            }}
          >
            <Box>
              <Typography variant="body2">Balance</Typography>
              <Typography variant="h6">$5,756</Typography>
            </Box>
            {/* Simulated Pin Iron */}
            <Box></Box>
          </Box>

          {/* Card Holder and Valid Thru */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 2,
            }}
          >
            <Box>
              <Typography variant="body2">Card Holder</Typography>
              <Typography variant="body1">Eddy Cusuma</Typography>
            </Box>
            <Box>
              <Typography variant="body2">Valid Thru</Typography>
              <Typography variant="body1">12/22</Typography>
            </Box>
          </Box>

          {/* Card Number and MasterCard-like Logo */}
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderRadius: "0 0 4px 4px",
              padding: 2,
            }}
          >
            <Typography variant="body1" sx={{ letterSpacing: 2 }}>
              3465 **** **** 5432
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box
                sx={{
                  width: 16,
                  height: 16,
                  backgroundColor: "grey.500",
                  borderRadius: "50%",
                }}
              ></Box>
              <Box
                sx={{
                  width: 16,
                  height: 16,
                  backgroundColor: "grey.400",
                  borderRadius: "50%",
                  marginLeft: "-8px", // Overlap the circles
                }}
              ></Box>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
