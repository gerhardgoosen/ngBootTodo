package za.co.goosen.service.dto;
import java.time.LocalDate;
import java.io.Serializable;
import java.util.Objects;

/**
 * A DTO for the {@link za.co.goosen.domain.Task} entity.
 */
public class TaskDTO implements Serializable {

    private Long id;

    private String title;

    private String description;

    private LocalDate dueDate;

    private Boolean complete;


    private Long userId;

    private String userLogin;

    private Long categoryId;

    private String categoryCategoryName;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDate getDueDate() {
        return dueDate;
    }

    public void setDueDate(LocalDate dueDate) {
        this.dueDate = dueDate;
    }

    public Boolean isComplete() {
        return complete;
    }

    public void setComplete(Boolean complete) {
        this.complete = complete;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getUserLogin() {
        return userLogin;
    }

    public void setUserLogin(String userLogin) {
        this.userLogin = userLogin;
    }

    public Long getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(Long categoryId) {
        this.categoryId = categoryId;
    }

    public String getCategoryCategoryName() {
        return categoryCategoryName;
    }

    public void setCategoryCategoryName(String categoryCategoryName) {
        this.categoryCategoryName = categoryCategoryName;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }

        TaskDTO taskDTO = (TaskDTO) o;
        if (taskDTO.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), taskDTO.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "TaskDTO{" +
            "id=" + getId() +
            ", title='" + getTitle() + "'" +
            ", description='" + getDescription() + "'" +
            ", dueDate='" + getDueDate() + "'" +
            ", complete='" + isComplete() + "'" +
            ", user=" + getUserId() +
            ", user='" + getUserLogin() + "'" +
            ", category=" + getCategoryId() +
            ", category='" + getCategoryCategoryName() + "'" +
            "}";
    }
}
