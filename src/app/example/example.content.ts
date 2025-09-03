import { SampleForm } from "ngx-dynamic-form";
import { iExample } from "./example.interface";


export const examples: iExample[] = [
    {
        name: 'Bootstrap Form',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptas hic ratione quod ipsum, repellat fugiat maiores aut animi perferendis architecto! Illo deleniti nemo pariatur nobis, id rem mollitia dignissimos?',
        form: SampleForm
    },
    {
        name: 'Material Form',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptas hic ratione quod ipsum, repellat fugiat maiores aut animi perferendis architecto! Illo deleniti nemo pariatur nobis, id rem mollitia dignissimos?',
        form: SampleForm
    },
    {
        name: 'Ant Design Form (NG-ZORRO)',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptas hic ratione quod ipsum, repellat fugiat maiores aut animi perferendis architecto! Illo deleniti nemo pariatur nobis, id rem mollitia dignissimos?',
        form: SampleForm
    }
]