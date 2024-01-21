import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { truncateString } from "@/services/truncateStrings";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

type propsCardProductType = {
  id: number;
  date: string;
  desc: string;
  image: string;
};

export default function CardProduct({
  props,
}: {
  props: propsCardProductType;
}) {
  return (
    <Card sx={{ minWidth: 280, maxWidth: 280, minHeight: 300 }}>
      <CardContent sx={{ p: 0 }}>
        <div className="card-image">
          <img src={props.image} alt="" className="w-full h-[170px]" />
        </div>
        <div className="card-desc px-3 mt-2 flex flex-col gap-y-2">
          <p>{props.date.substring(0, 10)}</p>
          <p>{truncateString(props.desc, 45)}</p>
        </div>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
