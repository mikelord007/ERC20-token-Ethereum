import { useState } from 'react'
import { Typography, Button, TextField, Grid, CircularProgress, Alert } from '@mui/material'

const ERC20Create = ({ importToken }) => {
    const [tokenName, setTokenName] = useState("");
    const [tokenSymbol, setTokenSymbol] = useState("");

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h6" noWrap component="div" sx={{ m: 1 }}>
                    Create token
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <TextField
                    label="Name"
                    sx={{ m: 1, width: '25ch' }}
                    placeholder="GOLD"
                    onChange={(e) => setTokenName(e.target.value)} />
                <TextField
                    label="Symbol"
                    sx={{ m: 1, width: '25ch' }}
                    placeholder="GLD"
                    onChange={(e) => setTokenSymbol(e.target.value)} />
            </Grid>
            {/* <Grid item xs={12}>
                <TextField
                    label="Initial supply (raw)"
                    sx={{ m: 1, width: '30ch' }}
                    placeholder={defaultInitialSupply}
                    type="number"
                    value={tokenInitialSupply}
                    onChange={(e) => setTokenInitialSupply(e.target.value)}
                />
                <TextField
                    label="Initial supply (adjusted)"
                    sx={{ m: 1, width: '30ch' }}
                    placeholder="1"
                    value={applyDecimals(tokenInitialSupply, defaultDecimals)}
                    variant="filled"
                />
                <TextField
                    label="Decimals"
                    sx={{ m: 1, width: '10ch' }}
                    value={defaultDecimals}
                    type="number"
                    variant="filled"
                />
            </Grid>
            <Grid item xs={12}>
                {successMessage && <Alert severity="success">{successMessage}</Alert>}
                {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
                <Button
                    variant="contained"
                    sx={{ m: 1 }}
                    onClick={() => onClickAction()}
                    disabled={loading}
                >
                    {successMessage ? "Token info" : (loading ? <CircularProgress size={25} /> : "Create")}
                </Button>
            </Grid> */}
        </Grid>
    )
}

export default ERC20Create