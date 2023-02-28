import { Box, Typography } from "@mui/material";

import ReviewDisplay from "../UI/ReviewDisplay";

const DisplayReview = (data) => {
 const reviewData = data;

 if (reviewData.length >= 0) {
  return (
   <Box>
    {reviewData.map((i) => (
     <ReviewDisplay key={i.id} name={i.username} rating={i.rating} body={i.description} />
    ))}
   </Box>
  );
 } else {
  return (
   <Box>
    <Typography variant="body1">There is no reviews on this product</Typography>
   </Box>
  );
 }
};

export default DisplayReview;
