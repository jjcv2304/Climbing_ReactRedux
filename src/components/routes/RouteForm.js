import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";

const RouteForm = ({
  route,
  onSave,
  onChange,
  saving = false,
  errors = {},
}) => {
  return (
    <form onSubmit={onSave}>
      <h2>{route.id ? "Edit" : "Add"} Routes</h2>
      {errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>
      )}
      <TextInput
        name="name"
        label="Name"
        value={route.name}
        onChange={onChange}
        error={errors.name}
      />
      <TextInput
        name="bolts"
        label="Bolts"
        value={route.bolts}
        onChange={onChange}
        error={errors.bolts}
      />

      {/*<SelectInput*/}
      {/*  name="authorId"*/}
      {/*  label="Author"*/}
      {/*  value={course.authorId || ""}*/}
      {/*  defaultOption="Select Author"*/}
      {/*  options={authors.map((author) => ({*/}
      {/*    value: author.id,*/}
      {/*    text: author.name,*/}
      {/*  }))}*/}
      {/*  onChange={onChange}*/}
      {/*  error={errors.author}*/}
      {/*/>*/}

      {/*<TextInput*/}
      {/*  name="category"*/}
      {/*  label="Category"*/}
      {/*  value={course.category}*/}
      {/*  onChange={onChange}*/}
      {/*  error={errors.category}*/}
      {/*/>*/}

      <button type="submit" disabled={saving} className="btn btn-primary">
        {saving ? "Saving..." : "Save"}
      </button>
    </form>
  );
};

RouteForm.propTypes = {
  route: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
};

export default RouteForm;
