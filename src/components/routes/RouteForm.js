import React from "react";
import PropTypes from "prop-types";
import TextInput from "../common/TextInput";
import SelectInput from "../common/SelectInput";

const RouteForm = ({
  route,
  grades,
  locations,
  routeTypes,
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
        value={route.bolts.toString()}
        onChange={onChange}
        error={errors.bolts}
      />

      <SelectInput
        name="grade"
        label="Grade"
        value={route.grade.id || ""}
        defaultOption="Select Grade"
        options={grades.map((grade) => ({
          value: grade.id,
          text: grade.name,
        }))}
        onChange={onChange}
        error={errors.grade}
      />

      <SelectInput
        name="type"
        label="Type"
        value={route.type.id || ""}
        defaultOption="Select Type"
        options={routeTypes.map((routeType) => ({
          value: routeType.id,
          text: routeType.name,
        }))}
        onChange={onChange}
        error={errors.type}
      />

      <SelectInput
        name="location"
        label="Location"
        value={route.location.id || ""}
        defaultOption="Select Location"
        options={locations.map((location) => ({
          value: location.id,
          text: location.name,
        }))}
        onChange={onChange}
        error={errors.type}
      />

      <button type="submit" disabled={saving} className="btn btn-primary">
        {saving ? "Saving..." : "Save"}
      </button>
    </form>
  );
};

RouteForm.propTypes = {
  grades: PropTypes.array.isRequired,
  routeTypes: PropTypes.array.isRequired,
  locations: PropTypes.array.isRequired,
  route: PropTypes.object.isRequired,
  errors: PropTypes.object,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
};

export default RouteForm;
