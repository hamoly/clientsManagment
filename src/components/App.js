import React, { useState } from 'react';
import ClientsTable2 from './ClientsTable/ClientsTable2';
import Container from '@material-ui/core/Container';

import custom from './custom'
import { ThemeProvider } from '@material-ui/core/styles';
const App = () =>  {
	const [data, setData] = useState([{clientId:101,clientName:'zerzer',clientEmail:"herher", clientStatue:false},{clientId:102,clientName:'kerker',clientEmail:"mermer", clientStatue:true}])
	const [editIdx, setEditIdx] = useState(-1)
	const handleStatue = (i) => {
		console.log(data[i].clientStatue)
		const statue = [...data]
		statue[i].clientStatue = !data[i].clientStatue
		setData(statue);
		console.log(data[i].clientStatue)
		}
		const handleRemove = i => {
		const wezo = data.filter((row, j) => j !== i)
		setData(wezo);
	};

	const startEditing = i => {
		setEditIdx(i)
	};

	const stopEditing = () => {
		setEditIdx(-1)
	};

	const handleChange = (e, name, i) => {
		const { value } = e.target;
		const bezo = data.map(
			(row, j) => (j === i ? { ...row, [name]: value } : row)
		)
		setData(bezo)
	};
	return (
		<div className='App'>
		<Container maxWidth="lg">
		<ThemeProvider theme={custom}>
			<ClientsTable2 handleRemove={handleRemove}
				startEditing={startEditing}
				editIdx={editIdx}
				stopEditing={stopEditing}
				handleChange={handleChange}
				handleStatue={handleStatue}
				data={data}
				header={[
					{
						name: "Client Name",
						prop: "clientName"
					},
					{
						name: "E-mail",
						prop: "clientEmail"
					},
				]}
			/>
		</ThemeProvider>
		</Container>
		</div>
	);
}

export default App;
