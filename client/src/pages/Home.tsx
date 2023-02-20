////rafc
import React from 'react'
import { Navbar } from '../layouts/Navbar'
import { PageItem, pageList } from './pageList'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import Masonry from '@mui/lab/Masonry';
import { Link } from 'react-router-dom';

export const Home = () => {

  return (
    <>
      <Navbar currentPage={pageList.menuPrincipal} />

      <Box sx={{ display: 'flex', justifyContent: 'center' }}  >
        <Masonry columns={3} spacing={2} sx={{ maxWidth: 700, }}>
          {
            Object.values(pageList).map((page: PageItem, index: number) =>
              <Card key={index} sx={{ maxWidth: 200, margin: "30px" }}>
                <CardActionArea component={Link} to={page.url} >
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
            )
          }
        </Masonry>
      </Box>
    </>
  )
}
