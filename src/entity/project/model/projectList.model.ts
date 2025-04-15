import project1 from "./asset/project_1.jpg";
import project2 from "./asset/project_2.jpg";
import project3 from "./asset/project_3.jpg";

const imgProject = {
  1: project1,
  2: project2,
  3: project3,
  4: project1,
  5: project2,
};

export const PROJECT_LIST = {
  ua: [
    {
      title: "Захист інтелектуальної власності",
      img: imgProject[1],
      description:
        "Успішно представляли інтереси великої IT-компанії у справі про порушення авторських прав на програмне забезпечення. Завдяки нашій стратегії захисту та глибокому аналізу законодавства, вдалося довести факт незаконного використання коду конкурентом. Суд постановив рішення на користь нашого клієнта з компенсацією збитків у розмірі 2,5 мільйона гривень та забороною подальшого використання спірного програмного забезпечення.",
    },
    {
      title: "Корпоративний конфлікт",
      img: imgProject[2],
      description:
        "Вирішили складний корпоративний спір між акціонерами великого виробничого підприємства. Розробили та впровадили юридичну стратегію, яка дозволила захистити інтереси міноритарних акціонерів від незаконного поглинання. Завдяки нашому втручанню було збережено структуру власності компанії та налагоджено конструктивний діалог між сторонами конфлікту. Справа завершилася підписанням мирової угоди та розробкою нового корпоративного договору.",
    },
    {
      title: "Податковий спір",
      img: imgProject[3],
      description:
        "Успішно оскаржили необґрунтовані податкові нарахування для мережі роздрібної торгівлі. Податкові органи вимагали сплати додаткових податків та штрафів на суму понад 10 мільйонів гривень. Наша команда провела детальний аналіз документації, виявила процедурні порушення під час перевірки та підготувала переконливу доказову базу. В результаті адміністративний суд скасував усі нарахування та визнав дії податкової незаконними.",
    },
    {
      title: "Трудовий спір",
      img: imgProject[4],
      description:
        "Представляли інтереси великої міжнародної компанії у колективному трудовому спорі з профспілкою. Розробили юридично обґрунтовану позицію щодо оптимізації штату в умовах економічної кризи. Провели серію успішних переговорів з представниками працівників та державними органами. Результатом стало досягнення компромісу, який дозволив компанії реалізувати необхідні зміни з мінімальними репутаційними та фінансовими втратами.",
    },
    {
      title: "Захист у кримінальному провадженні",
      img: imgProject[5],

      description:
        "Забезпечили успішний захист директора будівельної компанії у кримінальному провадженні щодо звинувачень у шахрайстві та розкраданні коштів інвесторів. Наша команда розробила комплексну стратегію захисту, зібрала необхідні докази та залучила експертів для проведення незалежних експертиз. Завдяки професійній роботі адвокатів справу було закрито на стадії досудового розслідування за відсутністю складу злочину. Репутація клієнта була повністю відновлена.",
    },
  ],
  en: [
    {
      title: "Intellectual Property Protection",
      img: imgProject[1],
      description:
        "Successfully represented a large IT company in a copyright infringement case involving software. Through our defense strategy and in-depth analysis of legislation, we proved the illegal use of code by a competitor. The court ruled in favor of our client with damages of 2.5 million hryvnias and prohibited further use of the disputed software. Our approach included comprehensive evidence collection and expert testimony that established clear ownership rights.",
    },
    {
      title: "Corporate Conflict Resolution",
      img: imgProject[2],
      description:
        "Resolved a complex corporate dispute between shareholders of a large manufacturing enterprise. We developed and implemented a legal strategy that protected minority shareholders from illegal takeover attempts. Our intervention preserved the company's ownership structure and established constructive dialogue between the conflicting parties. The case concluded with the signing of a settlement agreement and the development of a new corporate contract that safeguarded all stakeholders' interests.",
    },
    {
      title: "Tax Dispute",
      img: imgProject[3],
      description:
        "Successfully challenged unjustified tax assessments for a retail chain. Tax authorities demanded additional taxes and penalties exceeding 10 million hryvnias. Our team conducted a detailed analysis of documentation, identified procedural violations during the audit, and prepared compelling evidence. As a result, the administrative court canceled all assessments and declared the tax authority's actions illegal. This victory established an important precedent for similar cases in the retail sector.",
    },
    {
      title: "Labor Dispute",
      img: imgProject[4],
      description:
        "Represented a large international company in a collective labor dispute with a trade union. We developed a legally sound position regarding staff optimization during an economic crisis. Our team conducted a series of successful negotiations with employee representatives and government agencies. The result was a compromise that allowed the company to implement necessary changes with minimal reputational and financial losses while respecting workers' rights.",
    },
    {
      title: "Criminal Defense",
      img: imgProject[5],
      description:
        "Provided successful defense for a construction company director in criminal proceedings regarding allegations of fraud and embezzlement of investor funds. Our team developed a comprehensive defense strategy, gathered necessary evidence, and engaged experts to conduct independent examinations. Thanks to the professional work of our attorneys, the case was closed at the pre-trial investigation stage due to lack of corpus delicti. The client's reputation was fully restored, allowing them to continue business operations without interruption.",
    },
  ],
};
