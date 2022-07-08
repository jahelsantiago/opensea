import { Grid, Typography } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import React from 'react'
import { useQuery } from '../../services'
import { ImageCard } from '../ImageCard';
import { useSearchBar } from '../SearchBar';
import "./CollectionCard.css"

const Image = styled('img')(({ theme }) => ({
  objectFit: 'contain',
  objectPosition: 'center',
  maxHeight: '410px',
  maxWidth: '100%',
  margin: "auto"
}))

export default function CollectionCard({ address }) {
  const { data, error, loading } = useQuery(`https://api.opensea.io/api/v1/asset_contract/${address}/`)
  const [SearchBar, searchID] = useSearchBar("Search an ID...", onSubmit)
  const [imageID, setImageID] = React.useState(null)

  if(!data){
    return <Typography variant='h2' align='center' color = "primary">
        Please write an Address
    </Typography>
  }
  
  function onSubmit(){
    setImageID(searchID)
  }




  return (
    <div className='CollectionCard-container' >
      <div className='CollectionCard-image'>
        <Image src={data.collection.banner_image_url} />
      </div>
      <Grid container justifyContent = "center">
        <Grid item sm = {6} sx = {{backgroundColor: "#d9ecff", padding: "2rem"}}>
          <Typography variant="h3" color={"primary"} align = "center">{data.collection.name}</Typography>
          <Typography variant="subtitle2" align='center'>{data.address}</Typography>
          <Typography variant="body2" align = "right">{new Date(data.created_date).toLocaleDateString()}</Typography>
          <Typography variant="body1" align='justify'>{data.description}</Typography>
          <Typography variant="body1" fontWeight={600}>{data.total_supply}</Typography>
        </Grid>

        <Grid item sm = {6} justifyContent = "center" sx={{backgroundColor: "#83bdf7"}}>
          {SearchBar}
          <ImageCard
            address={address}
            id={imageID}
          />
        </Grid>
      </Grid>

    </div>
  )
}
