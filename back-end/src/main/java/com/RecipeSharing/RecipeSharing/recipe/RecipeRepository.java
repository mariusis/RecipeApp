package com.RecipeSharing.RecipeSharing.Recipe;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public interface RecipeRepository extends CrudRepository<Recipe, Long> {
}
