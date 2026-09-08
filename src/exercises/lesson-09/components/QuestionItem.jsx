import { useContext, useState } from 'react';
import { SurveyContext } from '../SurveyContext';
import { QUESTION_TYPES } from '../surveyReducer';
import styles from '../StudentWork.module.css';

// Question Item Component - Students will add Edit/Delete functionality here
export function QuestionItem({ question }) {
  //HINT: use these with controlled form
  const [workingText, setWorkingText] = useState(question.question);
  const { state, dispatch } = useContext(SurveyContext);
  const isEditing = state?.ui?.editingQuestionId === question.id;

  // Helper function to convert type to title case
  const formatQuestionType = (type) => {
    return type
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join('-');
  };

  // TODO: Students will add edit functionality here
  const handleEdit = () => {
    dispatch({
      type: 'SET_EDITING_QUESTION',
      payload: {
        questionId: isEditing ? null : question.id,
      },
    });
    // Hint: Use SET_EDITING_QUESTION action
  };

  // TODO: Students will add save functionality here
  const handleSave = (e) => {
    e.preventDefault();
    if (!workingText.trim()) return;
    dispatch({
      type: 'UPDATE_QUESTION_TEXT',
      payload: {
        id: question.id,
        newText: workingText,
      },
    });

    dispatch({
      type: 'SET_EDITING_QUESTION',
      payload: { questionId: null },
    });
    // Hint: Use UPDATE_QUESTION_TEXT action with workingText
  };

  const handleCancel = () => {
    setWorkingText(question.question);
    dispatch({
      type: 'SET_EDITING_QUESTION',
      payload: { questionId: null },
    });
  };

  const handleOptionChange = (index, newText) => {
    dispatch({
      type: 'UPDATE_OPTION_TEXT',
      payload: {
        questionId: question.id,
        optionIndex: index,
        newText: newText,
      },
    });
  };

  const handleDeleteOption = (index) => {
    dispatch({
      type: 'DELETE_OPTION_FROM_QUESTION',
      payload: {
        questionId: question.id,
        optionIndex: index,
      },
    });
  };

  const handleAddOption = () => {
    const optionText = window.prompt('Enter new option text:');
    if (optionText && optionText.trim()) {
      dispatch({
        type: 'ADD_OPTION_TO_QUESTION',
        payload: {
          questionId: question.id,
          optionText: optionText.trim(),
        },
      });
    }
  };

  // TODO: Students will add delete functionality here
  const handleDelete = () => {
    const confirmed = window.confirm(
      'Are you sure you want to delete this question?'
    );
    if (confirmed) {
      dispatch({
        type: 'DELETE_QUESTION',
        payload: {
          id: question.id,
        },
      });
    }
    // Hint: Show confirmation dialog, then use DELETE_QUESTION action
  };

  return (
    <div className={styles['question-item']}>
      <div className={styles['question-header']}>
        <span className={styles['question-type']}>
          Question Type: {formatQuestionType(question.type)}
        </span>
        <div className={styles['question-actions']}>
          {/* TODO: Students add Edit and Delete buttons here */}
          <button className={styles['edit-btn']} onClick={handleEdit}>
            {isEditing ? 'Cancel' : 'Edit'}
          </button>
          <button className={styles['delete-btn']} onClick={handleDelete}>
            Delete (TODO)
          </button>
        </div>
      </div>

      {/* TODO: Students will add conditional controlled form to edit question here */}
      <div className={styles['question-content']}>
        {isEditing ? (
          <form onSubmit={handleSave} className={styles['edit-form']}>
            <input
              type="text"
              value={workingText}
              onChange={(e) => setWorkingText(e.target.value)}
            />
            <button type="submit">Save</button>
            <button type="button" onClick={handleCancel}>
              Cancel
            </button>
          </form>
        ) : (
          <h3>{question.question}</h3>
        )}
      </div>

      {question.type === QUESTION_TYPES.MULTIPLE_CHOICE && (
        <div className={styles['options-section']}>
          <h4>Answer Options:</h4>
          <ul>
            {question.options.map((option, index) => (
              <li key={index} className={styles['option-item']}>
                {isEditing ? (
                  <>
                    <input
                      type="text"
                      value={option}
                      onChange={(e) =>
                        handleOptionChange(index, e.target.value)
                      }
                    />

                    <button
                      type="button"
                      onClick={() => handleDeleteOption(index)}
                      disabled={question.options.length <= 2}
                    >
                      Delete
                    </button>
                  </>
                ) : (
                  <span className={styles['option-text']}>{option}</span>
                )}
              </li>
            ))}
          </ul>

          <button
            type="button"
            className={styles['add-option-btn']}
            onClick={handleAddOption}
          >
            Add Option
          </button>
        </div>
      )}
    </div>
  );
}
