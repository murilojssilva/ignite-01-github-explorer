import { useState, useEffect } from "react"
import axios from "axios"

import { RepositoryItem } from './RepositoryItem';

import "../styles/repositories.scss"

const repository = {
	name: 'unform2',
	description: 'Forms in React',
	link: 'https://github.com/unform/unform'
}

export function RepositoryList(){
	const [repositories, setRepositories] = useState([]);

	useEffect(() => {
		fetch('https://api.github.com/orgs/rocketseat/repos')
		.then(response => response.json())
		.then(data => setRepositories(data))
	}, [])
	return(
		<section className='repository-list'>
			<h1>Lista de repositórios</h1>
			<ul>
				<RepositoryItem repository= {repository} />
				<RepositoryItem repository= {repository} />
				<RepositoryItem repository= {repository} />
				<RepositoryItem repository= {repository} />
			</ul>
		</section>
	)
}