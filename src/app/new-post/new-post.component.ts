import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {PostsService} from "../services/posts.service";
import {Router} from "@angular/router";
import {Post} from "../models/Post.model";

@Component({
  selector: 'app-new-post-component',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  newForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private postsService: PostsService, private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.newForm = this.formBuilder.group({
      title: [''],
      contenu: ['']
    });
  }

  onSaveForm() {
    const title = this.newForm.get('title').value;
    const contenu = this.newForm.get('contenu').value;
    const newForm = new Post(title, contenu);
    this.postsService.createNewPosts(newForm);
    this.router.navigate(['posts']);
  }



}
