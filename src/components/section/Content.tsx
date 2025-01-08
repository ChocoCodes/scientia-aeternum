import { ModuleContent } from '../../utils/utils';
import { useParams } from 'react-router-dom';
import contents from '../../utils/contents';

export default function Content() {
    const { id } = useParams();
    const content: ModuleContent | undefined = contents.find((content: ModuleContent) => content.module === Number(id));
    if(!content) {
        return <p>Content not found.</p>;
    }
    
    return ( 
        content &&
        <section className='content'>
            <img src={ content.image } alt={ `Module ${ content.module } image` } />
            <h1>{ content.title }</h1>
            <p>{ content.content }</p>
        </section>
    )
}