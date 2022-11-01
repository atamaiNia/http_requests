import { Component } from 'react';
import { StyledBtnClose, StyledBtnEdit } from './Material.styled';

const EditMaterialModal = ({ onClose, onEdit }) => {
  return (
    <div>
      <h2>Модалка редагування матеріалу</h2>
      <div>
        <button
          type="button"
          onClick={() => {
            onEdit();
            onClose();
          }}
        >
          Ось тепер точно можна редагувати
        </button>
        <StyledBtnClose type="button" onClick={onClose}>
          Закрити
        </StyledBtnClose>
      </div>
    </div>
  );
};

export class Material extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => this.setState({ isModalOpen: true });
  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    const { item, onUpdate, onDelete } = this.props;
    const { isModalOpen } = this.state;
    return (
      <div>
        <p>
          <b>Назва:</b> {item.title}
        </p>
        <p>
          <b>Ссилка:</b> {item.link}
        </p>
        <div>
          <button type="button" onClick={() => onDelete(item.id)}>
            Видалити
          </button>
          <StyledBtnEdit type="button" onClick={this.openModal}>
            Редагувати
          </StyledBtnEdit>
        </div>

        {isModalOpen && (
          <EditMaterialModal
            onClose={this.closeModal}
            onEdit={() => onUpdate({ id: item.id, title: Date.now() })}
          />
        )}
      </div>
    );
  }
}
