import React from "react";

export let recsIndexes = [];

export function Question({ Question, onAnswer }) {
  function rememberRecs(index) {
    recsIndexes.push(index);
    console.log(recsIndexes);
  }

  if (Question.type === "main" && Question.id === 1) { // для main - объекты = пропустить
    return (
      <div className="question">
        <div className="mainQuestion">
          <p>{Question.text}</p>
          <label>
            <input type="radio" name={Question.id.toString()} value="Yes" />
            Да
          </label>
          <label>
            <input
              type="radio"
              onClick={() => onAnswer(24)}
              name={Question.id.toString()}
              value="Skip"
            />
            Нет
          </label>
          <label>
            <input
              type="radio"
              onClick={() => onAnswer(24)}
              name={Question.id.toString()}
              value="Skip"
            />
            Пропустить
          </label>
        </div>
      </div>
    );
  } else if (Question.type === "main" && Question.id === 2) { // для main где много вариантов
    return (
      <div className="question">
        <div className="mainQuestion">
          <p>{Question.text}</p>
          <label>
            <input type="radio" name={Question.id.toString} value="Yes" />
            Право собственности
          </label>
          <label>
            <input type="radio" name={Question.id.toString()} value="Skip" />
            Право бессрочного пользования
          </label>
          <label>
            <input type="radio" name={Question.id.toString()} value="Skip" />
            Право аренды
          </label>
          <label>
            <input type="radio" name={Question.id.toString()} value="Skip" />
            Данная информация отсутствует
          </label>
          <label>
            <input
              type="radio"
              onClick={() => onAnswer(26)}
              name={Question.id.toString()}
              value="Skip"
            />
            Пропустить
          </label>
        </div>
      </div>
    );
  } else if (Question.type === "medium" && Question.id === 1) { // для медиумов (да нет объекты скип)
    return (
      <div className="question">
        <div className="mainQuestion">
          <p>{Question.text}</p>
          <label>
            <input type="radio" name={Question.id.toString()} value="Yes" />
            Да
          </label>
          <label>
            <input type="radio" name={Question.id.toString()} value="Skip" />
            Нет
          </label>
          <label>
            <input type="radio" name={Question.id.toString()} value="Skip" />
            Данные объекты отсутствуют
          </label>
          <label>
            <input type="radio" name={Question.id.toString()} value="Skip" />
            Пропустить
          </label>
        </div>
      </div>
    );
  } 
  
  // ------------------------------------------------------------------------------------

  else if (Question.type === "medium") { // для медиумов (да нет скип)
    return (
      <div className="question">
        <div className="mainQuestion">
          <p>{Question.text}</p>
          <label>
            <input type="radio" name={Question.id.toString()} value="Yes" />
            Да
          </label>
          <label>
            <input type="radio" name={Question.id.toString()} value="Skip" />
            Нет
          </label>
          <label>
            <input type="radio" name={Question.id.toString()} value="Skip" />
            Пропустить
          </label>
        </div>
      </div>
    );
  } else if (Question.type === "medium") { // для медиумов (да нет скип)
    return (
      <div className="question">
        <div className="mainQuestion">
          <p>{Question.text}</p>
          <label>
            <input type="radio" name={Question.id.toString()} value="Yes" />
            Да
          </label>
          <label>
            <input type="radio" name={Question.id.toString()} value="Skip" />
            Нет
          </label>
          <label>
            <input type="radio" name={Question.id.toString()} value="Skip" />
            Пропустить
          </label>
        </div>
      </div>
    );
  } else if (Question.type === "medium") { // для медиумов (да нет скип)
    return (
      <div className="question">
        <div className="mainQuestion">
          <p>{Question.text}</p>
          <label>
            <input type="radio" name={Question.id.toString()} value="Yes" />
            Да
          </label>
          <label>
            <input type="radio" name={Question.id.toString()} value="Skip" />
            Нет
          </label>
          <label>
            <input type="radio" name={Question.id.toString()} value="Skip" />
            Пропустить
          </label>
        </div>
      </div>
    );
  } else if (Question.type === "medium") { // для медиумов (да нет скип)
    return (
      <div className="question">
        <div className="mainQuestion">
          <p>{Question.text}</p>
          <label>
            <input type="radio" name={Question.id.toString()} value="Yes" />
            Да
          </label>
          <label>
            <input type="radio" name={Question.id.toString()} value="Skip" />
            Нет
          </label>
          <label>
            <input type="radio" name={Question.id.toString()} value="Skip" />
            Пропустить
          </label>
        </div>
      </div>
    );
  } else if (Question.type === "medium") { // для медиумов (да нет скип)
    return (
      <div className="question">
        <div className="mainQuestion">
          <p>{Question.text}</p>
          <label>
            <input type="radio" name={Question.id.toString()} value="Yes" />
            Да
          </label>
          <label>
            <input type="radio" name={Question.id.toString()} value="Skip" />
            Нет
          </label>
          <label>
            <input type="radio" name={Question.id.toString()} value="Skip" />
            Пропустить
          </label>
        </div>
      </div>
    );
  } else if (Question.type === "medium") { // для медиумов (да нет скип)
    return (
      <div className="question">
        <div className="mainQuestion">
          <p>{Question.text}</p>
          <label>
            <input type="radio" name={Question.id.toString()} value="Yes" />
            Да
          </label>
          <label>
            <input type="radio" name={Question.id.toString()} value="Skip" />
            Нет
          </label>
          <label>
            <input type="radio" name={Question.id.toString()} value="Skip" />
            Пропустить
          </label>
        </div>
      </div>
    );
  } else if (Question.type === "medium") { // для медиумов (да нет скип)
    return (
      <div className="question">
        <div className="mainQuestion">
          <p>{Question.text}</p>
          <label>
            <input type="radio" name={Question.id.toString()} value="Yes" />
            Да
          </label>
          <label>
            <input type="radio" name={Question.id.toString()} value="Skip" />
            Нет
          </label>
          <label>
            <input type="radio" name={Question.id.toString()} value="Skip" />
            Пропустить
          </label>
        </div>
      </div>
    );
  } else if (Question.type === "medium") { // для медиумов (да нет скип)
    return (
      <div className="question">
        <div className="mainQuestion">
          <p>{Question.text}</p>
          <label>
            <input type="radio" name={Question.id.toString()} value="Yes" />
            Да
          </label>
          <label>
            <input type="radio" name={Question.id.toString()} value="Skip" />
            Нет
          </label>
          <label>
            <input type="radio" name={Question.id.toString()} value="Skip" />
            Пропустить
          </label>
        </div>
      </div>
    );
  } else if (Question.type === "medium") { // для медиумов (да нет скип)
    return (
      <div className="question">
        <div className="mainQuestion">
          <p>{Question.text}</p>
          <label>
            <input type="radio" name={Question.id.toString()} value="Yes" />
            Да
          </label>
          <label>
            <input type="radio" name={Question.id.toString()} value="Skip" />
            Нет
          </label>
          <label>
            <input type="radio" name={Question.id.toString()} value="Skip" />
            Пропустить
          </label>
        </div>
      </div>
    );
  } else if (Question.type === "medium") { // для медиумов (да нет скип)
    return (
      <div className="question">
        <div className="mainQuestion">
          <p>{Question.text}</p>
          <label>
            <input type="radio" name={Question.id.toString()} value="Yes" />
            Да
          </label>
          <label>
            <input type="radio" name={Question.id.toString()} value="Skip" />
            Нет
          </label>
          <label>
            <input type="radio" name={Question.id.toString()} value="Skip" />
            Пропустить
          </label>
        </div>
      </div>
    );
  }

  // -------------------------------------------------------------------------------------
  
  else if (Question.type === "minor") { // для миноров
    return (
      <div className="question">
        <div className="otherQuestion">
          <p>{Question.text}</p>
          <label>
            <input type="radio" name={Question.id.toString()} value="Yes" />
            Да
          </label>
          <label>
            <input type="radio" name={Question.id.toString()} value="No" />
            Нет
          </label>
          <label>
            <input type="radio" name={Question.id.toString()} value="Skip" />
            Пропустить
          </label>
        </div>
      </div>
    );
  } else if (Question.type === "minor") { // для миноров
    return (
      <div className="question">
        <div className="otherQuestion">
          <p>{Question.text}</p>
          <label>
            <input type="radio" name={Question.id.toString()} value="Yes" />
            Да
          </label>
          <label>
            <input type="radio" name={Question.id.toString()} value="No" />
            Нет
          </label>
          <label>
            <input type="radio" name={Question.id.toString()} value="Skip" />
            Пропустить
          </label>
        </div>
      </div>
    );
  } else if (Question.type === "minor") { // для миноров
    return (
      <div className="question">
        <div className="otherQuestion">
          <p>{Question.text}</p>
          <label>
            <input type="radio" name={Question.id.toString()} value="Yes" />
            Да
          </label>
          <label>
            <input type="radio" name={Question.id.toString()} value="No" />
            Нет
          </label>
          <label>
            <input type="radio" name={Question.id.toString()} value="Skip" />
            Пропустить
          </label>
        </div>
      </div>
    );
  } else if (Question.type === "minor") { // для миноров
    return (
      <div className="question">
        <div className="otherQuestion">
          <p>{Question.text}</p>
          <label>
            <input type="radio" name={Question.id.toString()} value="Yes" />
            Да
          </label>
          <label>
            <input type="radio" name={Question.id.toString()} value="No" />
            Нет
          </label>
          <label>
            <input type="radio" name={Question.id.toString()} value="Skip" />
            Пропустить
          </label>
        </div>
      </div>
    );
  } else if (Question.type === "minor") { // для миноров
    return (
      <div className="question">
        <div className="otherQuestion">
          <p>{Question.text}</p>
          <label>
            <input type="radio" name={Question.id.toString()} value="Yes" />
            Да
          </label>
          <label>
            <input type="radio" name={Question.id.toString()} value="No" />
            Нет
          </label>
          <label>
            <input type="radio" name={Question.id.toString()} value="Skip" />
            Пропустить
          </label>
        </div>
      </div>
    );
  } else if (Question.type === "minor") { // для миноров
    return (
      <div className="question">
        <div className="otherQuestion">
          <p>{Question.text}</p>
          <label>
            <input type="radio" name={Question.id.toString()} value="Yes" />
            Да
          </label>
          <label>
            <input type="radio" name={Question.id.toString()} value="No" />
            Нет
          </label>
          <label>
            <input type="radio" name={Question.id.toString()} value="Skip" />
            Пропустить
          </label>
        </div>
      </div>
    );
  } else if (Question.type === "minor") { // для миноров
    return (
      <div className="question">
        <div className="otherQuestion">
          <p>{Question.text}</p>
          <label>
            <input type="radio" name={Question.id.toString()} value="Yes" />
            Да
          </label>
          <label>
            <input type="radio" name={Question.id.toString()} value="No" />
            Нет
          </label>
          <label>
            <input type="radio" name={Question.id.toString()} value="Skip" />
            Пропустить
          </label>
        </div>
      </div>
    );
  } else if (Question.type === "minor") { // для миноров
    return (
      <div className="question">
        <div className="otherQuestion">
          <p>{Question.text}</p>
          <label>
            <input type="radio" name={Question.id.toString()} value="Yes" />
            Да
          </label>
          <label>
            <input type="radio" name={Question.id.toString()} value="No" />
            Нет
          </label>
          <label>
            <input type="radio" name={Question.id.toString()} value="Skip" />
            Пропустить
          </label>
        </div>
      </div>
    );
  } else if (Question.type === "minor") { // для миноров
    return (
      <div className="question">
        <div className="otherQuestion">
          <p>{Question.text}</p>
          <label>
            <input type="radio" name={Question.id.toString()} value="Yes" />
            Да
          </label>
          <label>
            <input type="radio" name={Question.id.toString()} value="No" />
            Нет
          </label>
          <label>
            <input type="radio" name={Question.id.toString()} value="Skip" />
            Пропустить
          </label>
        </div>
      </div>
    );
  } else if (Question.type === "minor") { // для миноров
    return (
      <div className="question">
        <div className="otherQuestion">
          <p>{Question.text}</p>
          <label>
            <input type="radio" name={Question.id.toString()} value="Yes" />
            Да
          </label>
          <label>
            <input type="radio" name={Question.id.toString()} value="No" />
            Нет
          </label>
          <label>
            <input type="radio" name={Question.id.toString()} value="Skip" />
            Пропустить
          </label>
        </div>
      </div>
    );
  } else if (Question.type === "minor") { // для миноров
    return (
      <div className="question">
        <div className="otherQuestion">
          <p>{Question.text}</p>
          <label>
            <input type="radio" name={Question.id.toString()} value="Yes" />
            Да
          </label>
          <label>
            <input type="radio" name={Question.id.toString()} value="No" />
            Нет
          </label>
          <label>
            <input type="radio" name={Question.id.toString()} value="Skip" />
            Пропустить
          </label>
        </div>
      </div>
    );
  } else if (Question.type === "minor") { // для миноров
    return (
      <div className="question">
        <div className="otherQuestion">
          <p>{Question.text}</p>
          <label>
            <input type="radio" name={Question.id.toString()} value="Yes" />
            Да
          </label>
          <label>
            <input type="radio" name={Question.id.toString()} value="No" />
            Нет
          </label>
          <label>
            <input type="radio" name={Question.id.toString()} value="Skip" />
            Пропустить
          </label>
        </div>
      </div>
    );
  } else if (Question.type === "minor") { // для миноров
    return (
      <div className="question">
        <div className="otherQuestion">
          <p>{Question.text}</p>
          <label>
            <input type="radio" name={Question.id.toString()} value="Yes" />
            Да
          </label>
          <label>
            <input type="radio" name={Question.id.toString()} value="No" />
            Нет
          </label>
          <label>
            <input type="radio" name={Question.id.toString()} value="Skip" />
            Пропустить
          </label>
        </div>
      </div>
    );
  } else if (Question.type === "minor") { // для миноров
    return (
      <div className="question">
        <div className="otherQuestion">
          <p>{Question.text}</p>
          <label>
            <input type="radio" name={Question.id.toString()} value="Yes" />
            Да
          </label>
          <label>
            <input type="radio" name={Question.id.toString()} value="No" />
            Нет
          </label>
          <label>
            <input type="radio" name={Question.id.toString()} value="Skip" />
            Пропустить
          </label>
        </div>
      </div>
    );
  }
}

export default Question;