import React from 'react';
// import { FiChevronRight } from 'react-icons/fi';
// import { Link } from 'react-router-dom';
// import api from '../../services/api';

// import logoImg from '../../assets/logo.svg';

// import { Title, Form, Repositories, Error } from "./styles";

// interface RepositoryDTO {
//     full_name: string;
//     description: string;
//     owner: {
//         login: string;
//         avatar_url: string;
//     };
// }

const Dashbord: React.FC = () => {
    // const [newRepo, setNewRepo] = useState('');
    // const [inputErro, setInputError] = useState('');
    // const [repositories, setRepositories] = useState<RepositoryDTO[]>(() => {
    //     const storagedRepositories = localStorage.getItem('@GithubExplorer:repositories');

    //     if(storagedRepositories){
    //         return JSON.parse(storagedRepositories);
    //     } else {
    //         return [];
    //     }
    // });

    // useEffect(() => {
    //     localStorage.setItem('@GithubExplorer:repositories', JSON.stringify(repositories));
    // }, [repositories]);

    // async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
    //     event.preventDefault();

    //     if(!newRepo) {
    //         setInputError('Digite o autor/nome do repositório');
    //         return;
    //     };

    //     try{
    //         // Adição de um novo repositório
    //         // Consumir a API do github
    //         // Salvar novo repositório no estado

    //         // Pode-se tipar o get colodando o tipo logo após com <>
    //         const response = await api.get<RepositoryDTO>(`repos/${newRepo}`);

    //         const repository = response.data;

    //         setRepositories([...repositories, repository]);
    //         setNewRepo('');
    //         setInputError('');
    //     } catch (err) {
    //         setInputError('Erro na busca por esse repositório');
    //     }
    // }

    return (
      <h1>DashBoard</h1>
    //     <>
    //     <img src={logoImg} alt="Github Explorer" />
    //     <Title>Explore repositórios no Github</Title>

    //     <Form hasError={!!inputErro} onSubmit={handleAddRepository}>
    //         <input
    //             value={newRepo}
    //             onChange={e => setNewRepo(e.target.value)}
    //             placeholder="Digite o nome do repositório"
    //         />
    //         <button type="submit"> Pesquisar </button>
    //     </Form>

    //     { inputErro && <Error>{inputErro}</Error> }

    //     <Repositories>
    //         {repositories.map(repository => (
    //             <Link key={repository.full_name} to={`/repository/${repository.full_name}`}>
    //                 <img src={repository.owner.avatar_url} alt={repository.owner.login}/>

    //                 <div>
    //                     <strong>{repository.full_name}</strong>
    //                     <p>{repository.description}</p>
    //                 </div>

    //                 <FiChevronRight size={20} />
    //             </Link>
    //         ))}
    //     </Repositories>
    //     </>
     );
};

export default Dashbord;
