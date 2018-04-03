import React from 'react'
import { Button, Grid, Icon } from 'material-ui'

export default ({ addAdditionalKeywordForm }) =>
<Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
  <Button onClick={(e) => addAdditionalKeywordForm()}>
    <Icon color="primary" style={{margin: 10, fontSize: 225}}>
      add_circle
    </Icon>
  </Button>
</Grid>
