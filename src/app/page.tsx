"use client";
import Hero from "@/components/Hero/Hero";
import TotalProductOptions from "@/components/TotalProductOptions";
import ProductDates from "@/components/DateProductOptions";

export default function Home() {
  return (
    <div>
      <div className="hero">
        <Hero />
      </div>
      <div className="product mt-12">
        <div className="product-settings flex flex-col gap-y-3 md:flex-row md:justify-between md:items-center px-7 md:px-12 mb-12">
          <p>x of y prouducts</p>
          <div className="flex gap-x-5 flex-col md:flex-row gap-y-5">
            <TotalProductOptions />
            <ProductDates />
          </div>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum
          voluptatibus sunt exercitationem a facere consequuntur, esse eligendi
          molestiae ut saepe quis illum at voluptate animi corporis ipsum quidem
          minus autem. Voluptatem, deserunt? Nisi eaque maxime molestiae?
          Laboriosam tempora modi delectus eos ex soluta cumque. Magnam cumque
          est voluptatum esse in delectus nam vero doloribus perferendis,
          officia, placeat repellat. Minima, quasi. Omnis, sit ex! Ratione modi
          omnis vitae inventore distinctio quaerat quas amet quae similique
          ullam eos eveniet repudiandae voluptatibus quam molestias cum alias
          est architecto magnam in, dicta labore possimus! Harum, recusandae
          quam. Libero earum alias, veniam odio quasi expedita voluptatum nulla
          ducimus deserunt delectus ex velit ullam amet facere autem illo
          aliquam fugit, voluptas optio sed voluptatibus non aperiam. Nihil ex
          quibusdam placeat porro consequatur perspiciatis, amet deserunt enim
          exercitationem iure, fuga repellendus qui libero adipisci neque
          mollitia eveniet nesciunt id reprehenderit? Temporibus eum porro
          molestias veritatis optio nihil! Nam ratione magni accusamus ipsum
          perspiciatis ab laudantium, consequuntur saepe. Excepturi earum
          adipisci minima blanditiis, placeat laboriosam cumque sequi eum
          necessitatibus tempora? Saepe enim neque, accusamus aliquid eveniet
          tempore fuga. Dolores debitis illum quod optio autem eum recusandae.
          Qui explicabo, distinctio facilis quia cum tenetur temporibus, harum
          assumenda, enim quae unde. Fugiat voluptas porro maiores recusandae
          quam esse molestiae sunt! Totam veritatis facere placeat tempora
          officiis ex et assumenda. Reiciendis incidunt eligendi distinctio ex
          molestiae, repudiandae vitae quae nam id? Quae dicta autem sint eos
          praesentium suscipit architecto aut unde! Voluptates nobis est quam
          quibusdam totam, quo officia voluptatem cum, magnam quae consectetur
          doloribus expedita atque maxime repellendus sint minima suscipit
          accusamus unde amet, molestiae voluptate enim. Nisi, debitis facere!
          Suscipit voluptatum provident aliquid, alias vitae mollitia? Repellat
          accusamus aspernatur facilis officiis assumenda. Ipsam magni dolores,
          et illum autem perferendis cupiditate nam ratione eligendi debitis,
          eos, sint saepe quasi? Consectetur?
        </p>
      </div>
    </div>
  );
}
