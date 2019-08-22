package za.co.goosen.service.mapper;

import za.co.goosen.domain.*;
import za.co.goosen.service.dto.TaskDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity {@link Task} and its DTO {@link TaskDTO}.
 */
@Mapper(componentModel = "spring", uses = {UserMapper.class, CategoryMapper.class})
public interface TaskMapper extends EntityMapper<TaskDTO, Task> {

    @Mapping(source = "user.id", target = "userId")
    @Mapping(source = "user.login", target = "userLogin")
    @Mapping(source = "category.id", target = "categoryId")
    @Mapping(source = "category.categoryName", target = "categoryCategoryName")
    TaskDTO toDto(Task task);

    @Mapping(source = "userId", target = "user")
    @Mapping(source = "categoryId", target = "category")
    Task toEntity(TaskDTO taskDTO);

    default Task fromId(Long id) {
        if (id == null) {
            return null;
        }
        Task task = new Task();
        task.setId(id);
        return task;
    }
}
