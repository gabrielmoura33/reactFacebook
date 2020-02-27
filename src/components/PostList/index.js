import React, {Component} from 'react';
import PostItem from '../PostItem';
import './style.css';
class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: "https://i.pravatar.cc/150?img=1"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://i.pravatar.cc/150?img=3"
            },
            content: "Olá Julio! Acredito que a RocketSeat Apenas contrata Devs Capazes e dispostos a ajudar a comunidade de alunos e seja apaixonado em ajudar os outros, se acha que esse é o seu perfil, nos envie seu curriculo!"
          },
          {
            id: 2,
            author: {
              name: "Gabriel de Moura e Souza",
              avatar: "https://i.pravatar.cc/150?img=4"
            },
            content: "Tambem Gostaria de me Inscrever se for possível, acredito que tenho capacidade de aprendizagem e habilidades para me candidatar a tal vaga"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Julio Alcantara",
          avatar: "https://i.pravatar.cc/150?img=1"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://i.pravatar.cc/150?img=3"
            },
            content: "Olá Julio! Acredito que a RocketSeat Apenas contrata Devs Capazes e dispostos a ajudar a comunidade de alunos e seja apaixonado em ajudar os outros, se acha que esse é o seu perfil, nos envie seu curriculo!"
          },
          {
            id: 2,
            author: {
              name: "Gabriel de Moura e Souza",
              avatar: "https://i.pravatar.cc/150?img=4"
            },
            content: "Tambem Gostaria de me Inscrever se for possível, acredito que tenho capacidade de aprendizagem e habilidades para me candidatar a tal vaga"
          }
        ]
      }
    ]
  };

  render () {
      return (
            this.state.posts.map(post => {
              return (
                <div className="container">
                <PostItem key={post.id} {...post}/>
                </div>
              )
          }
        )
      )
  }
}
export default PostList;