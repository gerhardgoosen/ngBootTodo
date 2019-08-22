import { Component, OnInit } from '@angular/core';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import * as moment from 'moment';
import { JhiAlertService } from 'ng-jhipster';
import { ITask, Task } from 'app/shared/model/task.model';
import { TaskService } from './task.service';
import { IUser, AccountService, UserService } from 'app/core';
import { ICategory } from 'app/shared/model/category.model';
import { CategoryService } from 'app/entities/category';

@Component({
  selector: 'jhi-task-update',
  templateUrl: './task-update.component.html'
})
export class TaskUpdateComponent implements OnInit {
  currentAccount: any;
  currentUser: any;

  isSaving: boolean;

  users: IUser[];

  categories: ICategory[];
  dueDateDp: any;

  editForm = this.fb.group({
    id: [],
    title: [],
    description: [],
    dueDate: [],
    complete: [],
    userId: [],
    categoryId: []
  });

  constructor(
    protected jhiAlertService: JhiAlertService,
    protected taskService: TaskService,
    protected userService: UserService,
    protected accountService: AccountService,
    protected categoryService: CategoryService,
    protected activatedRoute: ActivatedRoute,
    protected router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.isSaving = false;
    this.activatedRoute.data.subscribe(({ task }) => {
      this.updateForm(task);
    });

    /*
    this.userService
      .query()
      .pipe(
        filter((mayBeOk: HttpResponse<IUser[]>) => mayBeOk.ok),
        map((response: HttpResponse<IUser[]>) => response.body)
      )
      .subscribe((res: IUser[]) => (this.users = res), (res: HttpErrorResponse) => this.onError(res.message));
    */

    this.accountService.identity().then(account => {
      this.currentAccount = account;
      this.userService.find(this.currentAccount.login).subscribe(
        (res: HttpResponse<IUser>) => {
          this.currentUser = res.body;
          this.editForm.get(['userId']).setValue(this.currentUser.id);
        },
        (res: HttpResponse<any>) => {
          this.onError(res.body);
        }
      );
    });

    this.categoryService
      .query()
      .pipe(
        filter((mayBeOk: HttpResponse<ICategory[]>) => mayBeOk.ok),
        map((response: HttpResponse<ICategory[]>) => response.body)
      )
      .subscribe((res: ICategory[]) => (this.categories = res), (res: HttpErrorResponse) => this.onError(res.message));
  }

  updateForm(task: ITask) {
    this.editForm.patchValue({
      id: task.id,
      title: task.title,
      description: task.description,
      dueDate: task.dueDate,
      complete: task.complete,
      userId: task.userId,
      categoryId: task.categoryId
    });
  }

  previousState() {
    window.history.back();
  }

  save() {
    this.isSaving = true;
    const task = this.createFromForm();
    if (task.id !== undefined) {
      this.subscribeToSaveResponse(this.taskService.update(task));
    } else {
      this.subscribeToSaveResponse(this.taskService.create(task));
    }
  }

  private createFromForm(): ITask {
    return {
      ...new Task(),
      id: this.editForm.get(['id']).value,
      title: this.editForm.get(['title']).value,
      description: this.editForm.get(['description']).value,
      dueDate: this.editForm.get(['dueDate']).value,
      complete: this.editForm.get(['complete']).value,
      userId: this.editForm.get(['userId']).value,
      categoryId: this.editForm.get(['categoryId']).value
    };
  }

  protected subscribeToSaveResponse(result: Observable<HttpResponse<ITask>>) {
    result.subscribe(() => this.onSaveSuccess(), () => this.onSaveError());
  }

  protected onSaveSuccess() {
    this.isSaving = false;
    //this.previousState();
    this.router.navigate(['/task']);
  }

  protected onSaveError() {
    this.isSaving = false;
  }
  protected onError(errorMessage: string) {
    this.jhiAlertService.error(errorMessage, null, null);
  }

  trackUserById(index: number, item: IUser) {
    return item.id;
  }

  trackCategoryById(index: number, item: ICategory) {
    return item.id;
  }
}
