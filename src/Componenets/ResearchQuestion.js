import React from 'react'
import { Grid, TextField, Typography } from 'material-ui'

export default ({ researchQuestion }) =>
<Grid container>
    <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Typography variant="subheading" align="left" style={{marginTop: 15, marginBottom: -15}}>
            My research question or statement
        </Typography>
        <TextField
          id="researchQuestion"
          value={researchQuestion}
          //Below updateResearchQuestion
        //   onChange={this.handleChange('name')}
          margin="normal"
          fullWidth
        />
    </Grid> 
</Grid>