////rafc

import React from 'react'
import { Navbar } from '../layouts/Navbar'
import { PageItem, pageList } from './pageList'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import Masonry from '@mui/lab/Masonry';

/*

import * as React from 'react';

export default function MediaCard() {
  return (
   
  );
}


*/

export const Home = () => {
  return (
    <>
      <Navbar currentPage={pageList[0]} />
      <Box sx={{display:'flex', justifyContent:'center'}}  >  
      <Masonry columns={3} spacing={2}  sx={{ maxWidth: 700,  }}>
        {
          pageList.slice(1).map((page: PageItem) => <>
            <Card sx={{ maxWidth: 200, margin: "30px" }}>
            {/* https://stackoverflow.com/questions/49007357/how-to-make-the-whole-card-component-clickable-in-material-ui-using-react-js */}
              <CardActionArea href={page.url}>
                <Box sx={{ bgcolor: 'inherit', display: 'flex', alignItems: 'center', padding: "30px" }}>
                  {page.getIcon()}
                </Box>
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {page.pageName}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {page.pageDescription}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </>)
        }
      </Masonry>
      </Box>
    </>
  )
}
