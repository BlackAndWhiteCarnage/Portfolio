import React, { useRef, useEffect } from 'react';
// STYLES
import { ReadMoreWrapper, ReadMore, Header, Answer, HeroImage } from './MoreAboutMe.styles';
// IMAGES
import hero from 'assets/images/heroImageAboutMe.svg';
import heroHorizontal from 'assets/images/heroImageAboutMeHorizontal.svg';
import heroMedium from 'assets/images/heroImageAboutMeMedium.svg';
// HELPERS
import { matchMedia, matchMediaMedium, matchMediaHorizontal } from 'helpers/matchMedia';

const MoreAboutMe = ({ toggleReadMore, toggleReadMoreHandler }) => {
  const ref = useRef(null);

  useEffect(() => {
    ref.current.scrollTo({ top: 0, behavior: 'smooth' });
  }, [toggleReadMoreHandler]);

  return (
    <>
      <HeroImage
        src={matchMediaHorizontal ? heroHorizontal : matchMediaMedium ? heroMedium : matchMedia && hero}
        className={toggleReadMore && 'show'}
      />
      <ReadMoreWrapper className={toggleReadMore && 'show'} ref={ref}>
        <ReadMore>
          <Header>Who am I exacly?</Header>
          <Answer>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam laborum sequi atque mollitia, iusto blanditiis quibusdam ab explicabo
            rem ducimus quia sapiente, eaque perferendis consequatur eligendi voluptate dolor minima magnam? Earum quos fuga explicabo quaerat quod
            accusantium maiores aliquam impedit sit velit numquam id mollitia adipisci officia, eveniet hic quo est reprehenderit vel ullam.
            Perspiciatis nostrum error numquam esse hic. Eveniet quod excepturi earum est dolores natus quaerat harum vero asperiores, labore eaque
            quisquam quibusdam quam doloribus aperiam numquam magni possimus. Nisi veniam dolorum, magnam quasi natus cupiditate accusamus
            perferendis. Nesciunt ullam cum porro velit in quia aliquam laborum fugit molestias minus excepturi eos eveniet non iure soluta hic
            ducimus consequuntur et, rem quaerat eaque magni id libero? Incidunt, esse. Enim, officia corrupti? Labore doloribus similique iure
            dolorum, illo eligendi repellendus quos reiciendis molestiae eveniet accusamus error aliquid sapiente laudantium natus nulla hic alias,
            culpa quod impedit ducimus dolor? Eaque? Neque deserunt, veritatis quaerat suscipit hic facere rem fugit est atque necessitatibus maiores
            corporis. Totam quidem temporibus doloribus ea. Cumque exercitationem laudantium itaque fuga magni fugit delectus dolores consequatur
            saepe! Provident cumque magnam placeat iusto quam?
          </Answer>
          <Header>How I learned those things?</Header>
          <Answer>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate provident fuga exercitationem, a dolor quod cumque doloribus dolore
            voluptates aliquam? Quod non adipisci quaerat animi, ratione sit velit at reprehenderit? Suscipit quos maiores possimus earum odit veniam
            sequi vitae nam, adipisci praesentium. Laborum iure alias exercitationem ad possimus, hic illo voluptate quod sit sint, rem at delectus
            labore explicabo tempora. Assumenda ad et perferendis maiores, eligendi minima, explicabo modi, eos illo atque reprehenderit soluta
            molestiae iste! Voluptatem rerum pariatur non id ipsa. Unde incidunt voluptatem neque a, alias nulla maxime. Esse sed perspiciatis dicta
            animi reprehenderit enim id quo ipsum quod quidem dolorem totam sequi quas perferendis molestias debitis hic soluta explicabo, repellat
            fugit impedit. Nesciunt dolor similique incidunt eveniet. Incidunt sed maiores explicabo nisi placeat repellat deleniti totam rem aut
            voluptatem omnis libero suscipit laborum, facere ratione, illum consequuntur? Cupiditate nulla in minima impedit accusantium quo quibusdam
            id dolor? Expedita iure sint sunt consectetur. Molestiae magnam modi nam voluptas dolorum cumque, illum tenetur exercitationem ut omnis
            temporibus, inventore, quidem ea qui? Inventore minima praesentium voluptatem vitae earum at quasi! Eum obcaecati excepturi ex nobis nemo
            explicabo libero dolorem, natus corporis ipsa, vero fugiat. Error eos recusandae, voluptatum delectus, maxime minus impedit amet doloribus
            quod iure labore rerum hic corporis!
          </Answer>
          <Header>Am I ambitios?</Header>
          <Answer>
            Aliquam laborum sequi atque mollitia, iusto blanditiis quibusdam ab explicabo rem ducimus quia sapiente, eaque perferendis consequatur
            eligendi voluptate dolor minima magnam? Earum quos fuga explicabo quaerat quod accusantium maiores aliquam impedit sit velit numquam id
            mollitia adipisci officia, eveniet hic quo est reprehenderit vel ullam. Perspiciatis nostrum error numquam esse hic. Eveniet quod
            excepturi earum est dolores natus quaerat harum vero asperiores, labore eaque quisquam quibusdam quam doloribus aperiam numquam magni
            possimus.
          </Answer>
          <Header>Expirience?</Header>
          <Answer>
            Earum quos fuga explicabo quaerat quod accusantium maiores aliquam impedit sit velit numquam id mollitia adipisci officia, eveniet hic quo
            est reprehenderit vel ullam. Perspiciatis nostrum error numquam esse hic. Eveniet quod excepturi earum est dolores natus quaerat harum
            vero asperiores, labore eaque quisquam quibusdam quam doloribus aperiam numquam magni possimus.
          </Answer>
          <Header>Why shoud you hire me?</Header>
          <Answer>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati magni doloremque exercitationem natus porro blanditiis itaque impedit
            maxime facere ducimus veniam fuga quia debitis voluptatibus ullam dignissimos, delectus vero earum. Voluptatem, doloribus molestias hic
            laborum ullam perferendis, recusandae porro pariatur ad ab repellendus accusamus placeat eligendi illo sint eos quia voluptatum minus quas
            incidunt cupiditate autem. Ipsum atque perferendis corporis? Illo tempore dolorum dignissimos quisquam molestias. Dolores expedita
            accusantium corrupti odio, hic voluptatum velit quia commodi consectetur illum tenetur autem eaque maiores architecto incidunt delectus a
            fugit? Eum, quisquam? Id?
          </Answer>
        </ReadMore>
      </ReadMoreWrapper>
    </>
  );
};

export default MoreAboutMe;
