import React from 'react'
import { Card, TextField, Typography, Grid } from 'material-ui'
import { CardContent } from 'material-ui/Card';

const styles = {
    card: {
        margin: 10,
    }
}

export default ({ data, updateTextBox }) =>
<Grid item xl={3} lg={3} md={4} sm={6} xs={12}>
    <Card style={styles.card}>
        <CardContent>
        <Typography gutterBottom variant="subheading" component="h2" align="left"
                    style={{marginTop: 15, marginBottom: -15}}>Keyword:</Typography>
          <TextField
            id={`keyword_${data.id}`}
            value={data.keyword}
            onChange={(e) => updateTextBox(e, 'keyword', data.id)}
            margin="normal"
            fullWidth
          />
        <Typography gutterBottom variant="subheading" component="h2" align="left"
                    style={{marginTop: 15, marginBottom: -15}}>Synonyms:</Typography>
          <TextField
            id={`synonym1_${data.id}`}
            value={data.synonym1}
            onChange={(e) => updateTextBox(e, 'synonym1', data.id)}
            margin="normal"
            fullWidth
          />
          <TextField
            id={`synonym2_${data.id}`}
            value={data.synonym2}
            onChange={(e) => updateTextBox(e, 'synonym2', data.id)}
            margin="normal"
            fullWidth
          />
        </CardContent>
    </Card>
</Grid>
