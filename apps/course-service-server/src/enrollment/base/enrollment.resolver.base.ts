/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Enrollment } from "./Enrollment";
import { EnrollmentCountArgs } from "./EnrollmentCountArgs";
import { EnrollmentFindManyArgs } from "./EnrollmentFindManyArgs";
import { EnrollmentFindUniqueArgs } from "./EnrollmentFindUniqueArgs";
import { DeleteEnrollmentArgs } from "./DeleteEnrollmentArgs";
import { EnrollmentService } from "../enrollment.service";
@graphql.Resolver(() => Enrollment)
export class EnrollmentResolverBase {
  constructor(protected readonly service: EnrollmentService) {}

  async _enrollmentsMeta(
    @graphql.Args() args: EnrollmentCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Enrollment])
  async enrollments(
    @graphql.Args() args: EnrollmentFindManyArgs
  ): Promise<Enrollment[]> {
    return this.service.enrollments(args);
  }

  @graphql.Query(() => Enrollment, { nullable: true })
  async enrollment(
    @graphql.Args() args: EnrollmentFindUniqueArgs
  ): Promise<Enrollment | null> {
    const result = await this.service.enrollment(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Enrollment)
  async deleteEnrollment(
    @graphql.Args() args: DeleteEnrollmentArgs
  ): Promise<Enrollment | null> {
    try {
      return await this.service.deleteEnrollment(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}